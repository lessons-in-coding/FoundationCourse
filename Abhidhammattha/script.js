document.addEventListener("DOMContentLoaded", function () {
    const itemGroupSelect = document.getElementById("mainGroup");
    const subGroupSelect = document.getElementById("subGroup");
    const itemsListContainer = document.getElementById("itemsList");
    const selectedPropertiesContainer =
      document.getElementById("selectedProperties");
    const selectedProductsContainer = document.getElementById("selectedProducts");
    const subGroupWrapper = document.getElementById("subGroupWrapper");
    const itemsListWrapper = document.getElementById("itemsListWrapper");
    const selectionResults = document.getElementById("selectionResults");
    const totalPropertiesElement = document.getElementById("totalProperties");
    const totalProductsElement = document.getElementById("totalProducts");
    const totalItemsElement = document.getElementById("totalItems");
  
    // Define groups of items and their sub-groups
    const itemData = {
      GroupA: {
        လောဘမူစိတ်: [
          "သော-ဒိဋ္ဌိသမ်-အ",
          "သော-ဒိဋ္ဌိသမ်-သ",
          "သော-ဒိဋ္ဌိဝိပ်-အ",
          "သော-ဒိဋ္ဌိဝိပ်-သ",
          "ဥ-ဒိဋ္ဌိသမ်-အ",
          "ဥ-ဒိဋ္ဌိသမ်-သ",
          "ဥ-ဒိဋ္ဌိဝိပ်-အ",
          "ဥ-ဒိဋ္ဌိဝိပ်-သ",
        ],
        ဒေါသမူစိတ်: ["ဒေါ-ပဋိဃသမ်-အ", "ဒေါ-ပဋိဃသမ်-သ"],
        မောဟမူစိတ်: ["ဥ-ဥဒ္ဓစ္စသမ်", "ဥ-ဝိစိကိစ္ဆာသမ်"],
      },
      GroupB: {
        အကုသလဝိပါက်စိတ်: ["Pineapple", "Mango", "Kiwi"],
        ကုသလဝိပါက်စိတ်: ["Watermelon", "Cantaloupe", "Papaya"],
        အဟိတ်ကြိယာစိတ်: ["Watermelon", "Cantaloupe", "Papaya"],
      },
      // Add more groups and sub-groups as needed
    };
  
    // Function to populate sub-groups based on selected group
    function populateSubGroups(group) {
      subGroupSelect.innerHTML = '<option value="">Select</option>';
      if (group in itemData) {
        Object.keys(itemData[group]).forEach((subGroup) => {
          const option = document.createElement("option");
          option.textContent = subGroup;
          option.value = subGroup;
          subGroupSelect.appendChild(option);
        });
        subGroupWrapper.classList.remove("hidden");
      } else {
        subGroupWrapper.classList.add("hidden");
        itemsListWrapper.classList.add("hidden");
        selectionResults.classList.add("hidden");
      }
    }
  
    // Function to populate items based on selected sub-group
    function populateItems(subGroup) {
      itemsListContainer.innerHTML = "";
      itemData[itemGroupSelect.value][subGroup].forEach((item) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "item";
        checkbox.value = item.toLowerCase(); // Use lowercase for easier comparison
        checkbox.id = item.toLowerCase();
        checkbox.addEventListener("change", updateSelection); // Listen for checkbox change
        const label = document.createElement("label");
        label.textContent = item;
        label.setAttribute("for", item.toLowerCase());
        const div = document.createElement("div");
        div.appendChild(checkbox);
        div.appendChild(label);
        itemsListContainer.appendChild(div);
      });
      itemsListWrapper.classList.remove("hidden");
    }
  
    // Event listener for item group selection
    itemGroupSelect.addEventListener("change", function () {
      const selectedGroup = itemGroupSelect.value;
      populateSubGroups(selectedGroup);
    });
  
    // Event listener for sub-group selection
    subGroupSelect.addEventListener("change", function () {
      const selectedSubGroup = subGroupSelect.value;
      populateItems(selectedSubGroup);
    });
  
    // Function to update selection results based on current selections
    function updateSelection() {
      const selectedItems = Array.from(
        document.querySelectorAll('input[name="item"]:checked')
      ).map((checkbox) => checkbox.value);
  
      // Check if any items are selected
      if (selectedItems.length === 0) {
        selectedPropertiesContainer.innerHTML = ""; // Clear properties container
        selectedProductsContainer.innerHTML = ""; // Clear products container
        selectionResults.classList.add("hidden"); // Hide selection results
        totalPropertiesElement.textContent = "Total Properties: 0";
        totalProductsElement.textContent = "Total Products: 0";
        totalItemsElement.textContent = "Total Items: 0";
        return; // Exit function early
      }
  
      const selectedProperties = new Set();
      const selectedProducts = new Set();
  
      // Collect selected properties and products for each selected item
      selectedItems.forEach((selectedItem) => {
        // Simulate getting properties and products based on selected item
        if (selectedItem === "သော-ဒိဋ္ဌိသမ်-အ") {
          selectedProperties.add("ဖဿ");
          selectedProperties.add("ဝေဒနာ");
          selectedProperties.add("သညာ");
          selectedProperties.add("စေတနာ");
          selectedProperties.add("ဧကဂ္ဂတာ");
          selectedProperties.add("ဇိဝိတိန္ဒြေ");
          selectedProperties.add("မနသိကာရ");
          selectedProperties.add("ဝိတက်");
          selectedProperties.add("ဝိစာရ");
          selectedProperties.add("အဓိမောက္ခ");
          selectedProperties.add("ဝိရိယ");
          selectedProperties.add("ပီတိ");
          selectedProperties.add("ဆန္ဒ");
          selectedProperties.add("မောဟ");
          selectedProperties.add("အဟိရိက");
          selectedProperties.add("အနောတ္တပ္ပ");
          selectedProperties.add("ဥဒ္ဓစ္စ");
          selectedProperties.add("လောဘ");
          selectedProperties.add("ဒိဋ္ဌိ");
          selectedProducts.add("စိတ္တဇရုပ်");
          selectedProducts.add("ကမ္မဇရုပ်");
          selectedProducts.add("ဣရိယာပုထ်ရုပ်");
          selectedProducts.add("ဝိညတ်ရုပ်");
          selectedProducts.add("ဟသနရုပ်");
        } else if (selectedItem === "သော-ဒိဋ္ဌိသမ်-သ") {
          selectedProperties.add("ဖဿ");
          selectedProperties.add("ဝေဒနာ");
          selectedProperties.add("သညာ");
          selectedProperties.add("စေတနာ");
          selectedProperties.add("ဧကဂ္ဂတာ");
          selectedProperties.add("ဇိဝိတိန္ဒြေ");
          selectedProperties.add("မနသိကာရ");
          selectedProperties.add("ဝိတက်");
          selectedProperties.add("ဝိစာရ");
          selectedProperties.add("အဓိမောက္ခ");
          selectedProperties.add("ဝိရိယ");
          selectedProperties.add("ပီတိ");
          selectedProperties.add("ဆန္ဒ");
          selectedProperties.add("မောဟ");
          selectedProperties.add("အဟိရိက");
          selectedProperties.add("အနောတ္တပ္ပ");
          selectedProperties.add("ဥဒ္ဓစ္စ");
          selectedProperties.add("လောဘ");
          selectedProperties.add("ဒိဋ္ဌိ");
          selectedProperties.add("ထိန");
          selectedProperties.add("မိဒ္ဓ");
        } else if (selectedItem === "သော-ဒိဋ္ဌိဝိပ်-အ") {
          selectedProperties.add("ဖဿ");
          selectedProperties.add("ဝေဒနာ");
          selectedProperties.add("သညာ");
          selectedProperties.add("စေတနာ");
          selectedProperties.add("ဧကဂ္ဂတာ");
          selectedProperties.add("ဇိဝိတိန္ဒြေ");
          selectedProperties.add("မနသိကာရ");
          selectedProperties.add("ဝိတက်");
          selectedProperties.add("ဝိစာရ");
          selectedProperties.add("အဓိမောက္ခ");
          selectedProperties.add("ဝိရိယ");
          selectedProperties.add("ပီတိ");
          selectedProperties.add("ဆန္ဒ");
          selectedProperties.add("မောဟ");
          selectedProperties.add("အဟိရိက");
          selectedProperties.add("အနောတ္တပ္ပ");
          selectedProperties.add("ဥဒ္ဓစ္စ");
          selectedProperties.add("လောဘ");
          selectedProperties.add("မာန");
        }
        // Add more conditions for other items as needed
      });
  
      // Convert sets to sorted arrays for alphabetical order
      const sortedProperties = Array.from(selectedProperties); //Array.from(selectedProperties).sort()
      const sortedProducts = Array.from(selectedProducts); //Array.from(selectedProducts).sort()
      const sortedItems = Array.from(selectedItems); //Array.from(selectedProducts).sort()
  
      // Display selected properties
      selectedPropertiesContainer.innerHTML = "";
      sortedProperties.forEach((property) => {
        const div = document.createElement("div");
        div.textContent = property;
        div.classList.add("property"); // Add class for styling
        selectedPropertiesContainer.appendChild(div);
      });
  
      // Display selected products
      selectedProductsContainer.innerHTML = "";
      sortedProducts.forEach((product) => {
        const div = document.createElement("div");
        div.textContent = product;
        div.classList.add("product"); // Add class for styling
        selectedProductsContainer.appendChild(div);
      });
  
      // Update total counts
      totalPropertiesElement.textContent = `${sortedProperties.length}`;
      totalProductsElement.textContent = `${sortedProducts.length}`;
      totalItemsElement.textContent = `${sortedItems.length}`;
  
      // Show the results section
      selectionResults.classList.remove("hidden");
    }
  
    // Initialize total counts to 0
    totalPropertiesElement.textContent = " ";
    totalProductsElement.textContent = " ";
    totalItemsElement.textContent = " ";
  });
  