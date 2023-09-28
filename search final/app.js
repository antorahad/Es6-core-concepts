 // Sample data array
 const data = ["Apple", "Banana", "Cherry", "Orange", "Pear"];

 // Function to display all data
 const displayData = () => {
     const dataList = document.getElementById("dataList");
     dataList.innerHTML = '';
     
     // Display all data
     data.forEach(item => {
         const li = document.createElement("li");
         li.textContent = item;
         dataList.appendChild(li);
     });
 };

 // Arrow function to handle the search
 const search = () => {
     const searchInput = document.getElementById("searchInput").value.toLowerCase();
     const dataList = document.getElementById("dataList");
     
     // Clear the current list
     dataList.innerHTML = '';
     
     // Filter the data array based on the search input
     const filteredData = data.filter(item => item.toLowerCase().includes(searchInput));

     console.log(filteredData.length)
     
     // Display the filtered data
     if(filteredData.length > 0){
        filteredData.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            dataList.appendChild(li);
        });
     }else{
        const li = document.createElement("li");
            li.textContent = 'No data found';
            dataList.appendChild(li);
     }
 };

 // Add click event listener to the search button
 document.getElementById("searchButton").addEventListener("click", search);

 // Load and display all data initially
 displayData();