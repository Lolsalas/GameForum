package models

import (
	"gorm.io/gorm"
)

type Posts struct {
	gorm.Model
	Post_Text string
	Post_Date string
	Post_ID   int
	Users_ID  int
}
