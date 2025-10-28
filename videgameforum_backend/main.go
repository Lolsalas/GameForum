package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type UserRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
}

type User struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
}

var test_users = []User{{ID: 1, Username: "Testname", Password: "secure", Email: "email@example.com"}}

func get_user(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, test_users)
}

func insertUsers(c *gin.Context) {
	var new_user UserRequest

	if err := c.ShouldBindJSON(&new_user); err != nil {
		c.JSON(http.StatusBadGateway, gin.H{"error": "Invalid JSON"})
		return
	}

	var added_user User

	added_user.ID = len(test_users) + 1
	added_user.Email = new_user.Email
	added_user.Password = new_user.Password
	added_user.Username = new_user.Username
	test_users = append(test_users, added_user)
	c.JSON(http.StatusCreated, new_user)
}

func main() {
	router := gin.Default()
	router.GET("/users", get_user)
	router.POST("/users", insertUsers)
	router.Run("localhost:8081")
}
