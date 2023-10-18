export const productQueries ={
    readAllProducts:
        `SELECT * FROM products`,
    searchForProducts:
        `SELECT * FROM products 
        Where products.Name 
        LIKE ?`,
    createNewProduct:
        `INSERT INTO products (Name, Calories, Ingredients, Price, Qty) VALUES ( ?, ?, ?, ?, ?)`,
    updateExistingProduct:
        `UPDATE products 
         SET Name=?, Calories=?, Ingredients=?, Price=?, Qty=?
         WHERE ID=?`,
    deleteProduct:
        `DELETE FROM products WHERE products.ID = ?`
}