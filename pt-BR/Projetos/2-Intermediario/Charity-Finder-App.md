# Charity Finder

**Tier:** 2-Intermediate

With the Charity Finder app you'll not only get to refine your Web Developer
skills, but you will also have an opportunity to see how you can do good. The
objective of this app is to utilize the [Global Giving](https://www.globalgiving.org/) organizations API to provide your users with a list of global charities they
can search to find a charity that matches their philanthropic interests.

### Constraints
- Since the app is asking the user to choose and contribute to a charitable
cause it's important that the presentation of information be clear and concise.
Just as important is the need for the UI/UX to be polished and engaging to use.

   Although this is true of all apps, its even more the case here since each
user that abandons the site represents the loss of an opportunity to do good
(see ['What is Web Site Conversion?](##useful-links-and-resources)) below.

## User Stories

-   [ ] User can see a page heading containing the application name.
-   [ ] User can see an overview of what the app is intended for in 'splash'
page format.
-   [ ] User can see a search area containing an set of drop down boxes that
allow the user to specify search criteria for charitable organizations
including:
    - Organization name
    - Organizations home country
    - Countries the organization serves
-   [ ] User can see a 'Search' button
-   [ ] User can click on the 'Search' button to display information cards
for the matching organizations in a search results area.
-   [ ] User can see organization information cards in the search results area
containing:
    - ID
    - Name
    - Address
    - Logo
-   [ ] User can click the logo in the organizations information card to open a
new window to that organizations home page.
-   [ ] User can see a page footer with links to your GitHub and social media
accounts including social media icons (like the Twitter icon).

## Bonus features

-   [ ] User can see a search dropdown for themes the charity focuses on.
-   [ ] User can select multiple options in the search dropdowns.
-   [ ] User can see a project link (e.g. 'PROJECT') on the organization
information card.
-   [ ] User can click on the project link to display a page with information
describing the Global Giving project the organization is associated with.
Hint: examine the structure of the JSON returned from the API to understand
the relationship between projects and organizations.

## Useful links and resources

- [What is Web Site Conversion?](https://www.marketing91.com/what-is-website-conversion/)
- [Global Giving API](https://www.globalgiving.org/api/)
- Sample XML for a project returned through the API:
```
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<projects numberFound="26842">
    <hasNext>true</hasNext>
    <nextProjectId>367</nextProjectId>
    <project>
        <active>false</active>
        <activities>To fund the training of health professionals including nurses, psychologists, and social workers, and buy medicine and equipment.</activities>
        <additionalDocumentation>https://www.globalgiving.org/pfil/359/projdoc.doc</additionalDocumentation>
        <approvedDate>2004-06-01T12:43:27-04:00</approvedDate>
        <contactAddress>28 Pine Street</contactAddress>
        <contactCity>Mechanic Falls</contactCity>
        <contactCountry>United States</contactCountry>
        <contactPostal>04256</contactPostal>
        <contactState>Maine</contactState>
        <contactUrl>http://groups.yahoo.com/group/FOCUSonCambodia</contactUrl>
        <country>Cambodia</country>
        <funding>8239.33</funding>
        <goal>55000.00</goal>
        <id>359</id>
        <image id="0">
            <imagelink size="small">
                <url>https://www.globalgiving.org/pfil/359/pict_grid1.jpg</url>
            </imagelink>
            <imagelink size="thumbnail">
                <url>https://www.globalgiving.org/pfil/359/pict_thumbnail.jpg</url>
            </imagelink>
            <imagelink size="medium">
                <url>https://www.globalgiving.org/pfil/359/pict_med.jpg</url>
            </imagelink>
            <imagelink size="large">
                <url>https://www.globalgiving.org/pfil/359/pict_grid7.jpg</url>
            </imagelink>
            <imagelink size="extraLarge">
                <url>https://www.globalgiving.org/pfil/359/pict_large.jpg</url>
            </imagelink>
            <imagelink size="original">
                <url>https://www.globalgiving.org/pfil/359/pict_original.jpg</url>
            </imagelink>
            <title>Improving the Health of Children in Cambodia</title>
        </image>
        <imageGallerySize>1</imageGallerySize>
        <imageLink>https://www.globalgiving.org/pfil/359/pict.jpg</imageLink>
        <iso3166CountryCode>KH</iso3166CountryCode>
        <longTermImpact>This project will help improve the mental and physical health of orphaned children in Cambodia.  This project will also ensure the sustainability of the Nutrition Center in Child Mental Health Center.</longTermImpact>
        <need>Our beneficiaries will be orphaned children suffering from AIDS/HIV and other diseases and children with mental health problems whose parents do not know how to cope because they were deprived of family experiences by the forced separations of the Pol Pot regime. At the Nutrition Center in Phnom Penh, we will help urban orphans from brothels and hospitals that have abandoned them. At the Child Mental Health Center, we will help families, largely the working poor, from all over Cambodia.</need>
        <numberOfDonations>102</numberOfDonations>
        <organization>
            <activeProjects>0</activeProjects>
            <addressLine1>1062 Lewiston Road</addressLine1>
            <addressLine2></addressLine2>
            <bridgeId>5824171103</bridgeId>
            <city>New Gloucester</city>
            <countries>
                <country>
                    <iso3166CountryCode>KH</iso3166CountryCode>
                    <name>Cambodia</name>
                </country>
            </countries>
            <country>United States</country>
            <id>10</id>
            <iso3166CountryCode>US</iso3166CountryCode>
            <mission>The mission of FOCUS is to pursue humanitarian programs that include medical aid, school construction and supplies, distribution of rice and rice seeds, road improvements, agricultural improvements, fish farms, basic housing, hospital restoration, school scholarships, and loans for infrastructure improvements. We want to help disadvantaged youth and their families, if they have any, in a country where the infrastructure is still weak due to Khmer Rouge depredations.</mission>
            <name>Friends of Cambodia in the U.S.  (FOCUS)</name>
            <postal>4260</postal>
            <state>Maine</state>
            <themes>
                <theme>
                    <id>health</id>
                    <name>Health</name>
                </theme>
            </themes>
            <totalProjects>2</totalProjects>
            <url></url>
        </organization>
        <progressReportLink>https://www.globalgiving.org/projects/educating-children-of-cambodia/updates/</progressReportLink>
        <projectLink>https://www.globalgiving.org/projects/educating-children-of-cambodia/</projectLink>
        <region>Asia and Oceania</region>
        <remaining>46760.67</remaining>
        <status>funded</status>
        <summary>To help abandoned children, many afflicted with HIV/AIDS, and children with mental health problems. We want to address lack of food, medicine and staff training.</summary>
        <themeName>Health</themeName>
        <title>Improving the Health of Children in Cambodia</title>
        <type>project</type>
    </project>
</projects>
```

## Example projects

[Playing with card layout](https://codepen.io/bradjdouglas/pen/xOZJRz)
