package main

import (
	httphandler "github.com/Lolsalas/GameForum/httphandler"
	"github.com/Lolsalas/GameForum/repository"
	"github.com/gin-gonic/gin"
)

const url string = "postgres://postgres:root@videogame_forum:5432/videogame_forum"

func main() {
	db := repository.New(url)
	hdlr := httphandler.New(db)
	router := gin.Default()
	router.POST("/user", hdlr.InsertUser)
	router.Run("localhost:8081")
}
