package httphandler

import (
	"net/http"

	"github.com/Lolsalas/GameForum/repository"
	"github.com/gin-gonic/gin"
)

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
	User_ID  int    `json:"users_id"`
}

type handler struct {
	db_manager *repository.DBManager
}

func New(db *repository.DBManager) *handler {

	return &handler{db_manager: db}
}

func (h *handler) InsertUser(c *gin.Context) {
	var new_user User
	if err := c.ShouldBind(&new_user); err != nil {
		// If binding fails, it's usually a Bad Request
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	err := h.db_manager.InsertNewUser(new_user.Username, new_user.Password, new_user.Email)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, "user inserted")
}
