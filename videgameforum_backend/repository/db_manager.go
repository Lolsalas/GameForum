package repository

import (
	"log"

	"github.com/Lolsalas/GameForum/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type DBManager struct {
	orm *gorm.DB
}

func New(url string) *DBManager {
	db, err := gorm.Open(postgres.Open(url), &gorm.Config{})
	if err != nil {
		log.Fatalln(err)
	}
	return &DBManager{db}
}

func (db *DBManager) InsertNewUser(name string, password string, email string) error {
	user := models.User{Username: name, Password: password, Email: email}
	result := db.orm.Create(&user)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
