package models

import (
	"gorm.io/gorm"
)

type Forum struct {
	gorm.Model
	Forum_Name string
	Forum_ID   int
}
