package httphandler

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
	User_ID  int    `json:"users_id"`
}
