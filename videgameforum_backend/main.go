package main

import (
	"log"

	httphandler "github.com/Lolsalas/GameForum/httphandler"
	"github.com/Lolsalas/GameForum/models"
	"github.com/Lolsalas/GameForum/repository"
	"github.com/gin-gonic/gin"
)

const url string = "postgres://postgres:root@localhost:5432/videogame_forum?sslmode=disable"

func main() {
	db := repository.New(url)
	hdlr := httphandler.New(db)

	err := db.Orm.AutoMigrate(&models.User{})
	if err != nil {
		log.Fatalln("Failed to migrate database:", err)
	}

	router := gin.Default()
	router.POST("/user", hdlr.InsertUser)
	router.Run("localhost:8081")
}
