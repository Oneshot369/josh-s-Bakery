export const userQueries ={
    readAllUsers:
        `SELECT * FROM users`,
    readUsersByID:
        `SELECT * FROM users
        WHERE ID = ?`,
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
        `SELECT products.ID, products.Name, products.Calories, products.Ingredients, products.Price 
        FROM products 
        JOIN cart ON products.id = cart.ProductID 
        JOIN users ON users.id = cart.UserID 
        WHERE cart.UserID = ?`,
    addToCart:
        `INSERT INTO cart (UserID, ProductID) VALUES (?, ?)`,
    removeFromCart:
        `DELETE FROM cart WHERE ProductID = ? AND UserID = ? LIMIT 1`
}