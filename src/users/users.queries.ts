export const userQueries ={
    readAllUsers:
        `SELECT * FROM users`,
    searchForUser:
        `SELECT * FROM users 
        Where users.Username =? 
        AND users.Password=?`,
    createNewUser:
        `INSERT INTO users 
        (FirstName, LastName, Email, Username, Password) 
        VALUES ( ?, ?, ?, ?, ?)`,
    updateExistingUser:
        `UPDATE Users 
         SET FirstName=?, LastName=?, Email=?, Username=?, Password=?
         WHERE ID=?`,
    deleteUser:
        `DELETE FROM users WHERE users.ID = ?`,
    getCart:
        `SELECT products.ID, products.Name, products.Calories, products.Ingredients, products.Price, cart.Qty 
        FROM products 
        JOIN cart ON products.id = cart.ProductID 
        JOIN users ON users.id = cart.UserID 
        WHERE cart.UserID = ?`
}