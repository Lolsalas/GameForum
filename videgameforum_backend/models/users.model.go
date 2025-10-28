package models

import (
	"gorm.io/gorm"
)

type Users struct {
	gorm.Model
	Username string
	Password string
	Email    string
	Users_id int
}
