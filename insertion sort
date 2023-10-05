# Creating a function for insertion sort algorithm
def insertion_sort(list1): 

		# Outer loop to traverse on len(list1) 
		for i in range(1, len(list1)): 

			a = list1[i] 

			# Move elements of list1[0 to i-1], 
			# which are greater to one position
			# ahead of their current position 
			j = i - 1
		
			while j >= 0 and a < list1[j]: 
				list1[j + 1] = list1[j] 
				j -= 1
				
			list1[j + 1] = a 
			
		return list1 
			
# Driver code
list1 = [ 7, 2, 1, 6 ] 
print("The unsorted list is:", list1) 
print("The sorted new list is:", insertion_sort(list1))
