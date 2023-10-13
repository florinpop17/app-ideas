#include <iostream>
#include <fstream>
#include <libxl.h> // Include the libxl header

int main() {
    // Create a libxl Book object
    libxl::Book* book = xlCreateXMLBook();

    if (book) {
        const char* filename = "example.xlsx"; // Replace with your .xlsx file path

        // Load the .xlsx file
        if (book->load(filename)) {
            // Create a JSON object to store the data
            nlohmann::json jsonData;

            // Iterate through each sheet in the .xlsx file
            for (int sheetIndex = 0; sheetIndex < book->sheetCount(); sheetIndex++) {
                libxl::Sheet* sheet = book->getSheet(sheetIndex);
                if (sheet) {
                    nlohmann::json sheetData; // JSON array to store sheet data

                    // Iterate through each row in the sheet
                    for (int rowIndex = 0; rowIndex < sheet->lastRow(); rowIndex++) {
                        nlohmann::json rowData; // JSON object to store row data

                        // Iterate through each column in the row
                        for (int columnIndex = 0; columnIndex < sheet->lastCol(); columnIndex++) {
                            libxl::CellType cellType = sheet->cellType(rowIndex, columnIndex);
                            if (cellType == libxl::CELLTYPE_STRING) {
                                const char* cellValue = sheet->readStr(rowIndex, columnIndex);
                                rowData[std::to_string(columnIndex)] = cellValue;
                            }
                            // You can add more conditions for other cell types (numbers, dates, etc.)
                        }

                        sheetData.push_back(rowData); // Add the row data to the JSON array
                    }

                    jsonData[sheet->name()] = sheetData; // Add the sheet data to the JSON object
                }
            }

            // Save the JSON data to a file
            std::ofstream jsonFile("output.json");
            jsonFile << jsonData.dump(4); // Using pretty-print with 4 spaces for indentation
            jsonFile.close();

            std::cout << "Conversion to JSON completed. JSON data saved to 'output.json'." << std::endl;
        } else {
            std::cerr << "Failed to load the .xlsx file." << std::endl;
        }

        book->release(); // Release the libxl Book object
    } else {
        std::cerr << "Failed to create the libxl Book object." << std::endl;
    }

    return 0;
}
