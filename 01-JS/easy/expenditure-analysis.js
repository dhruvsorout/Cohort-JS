function calculateTotalSpentByCategory(transactions) {
    let categoryTotals = {};

    for (let item of transactions) {
        if (!categoryTotals[item.category]) {
            categoryTotals[item.category] = 0;
        }
        categoryTotals[item.category] += item.price;
    }

    let output = [];
    for (let category in categoryTotals) {
        output.push({
            category: category,
            totalSpent: categoryTotals[category]
        });
    }

    return output;
}

let transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza'
    },
    {
        id: 2,
        timestamp: 1656163200000,
        price: 25,
        category: 'Electronics',
        itemName: 'Headphones'
    },
    {
        id: 3,
        timestamp: 1656249600000,
        price: 15,
        category: 'Clothing',
        itemName: 'T-Shirt'
    },
    {
        id: 4,
        timestamp: 1656336000000,
        price: 8,
        category: 'Food',
        itemName: 'Burger'
    }
];

let final = calculateTotalSpentByCategory(transactions);
console.log(final);