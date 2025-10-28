'use client'

import React from "react";
import { Drawer, Button, ListItemButton, ListItemText } from "@mui/material";
import {List} from "@mui/material";
import {ListItem} from "@mui/material";
import"../../App.css"
import { lightBlue } from "@mui/material/colors";


function SideBar(){
    
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
    return(
        <div id='SideBar'>
            <Button disableRipple size="small" fullWidth id="SideBarButton" onClick={toggleDrawer(true)}></Button>
            <Drawer open={open} onClose={toggleDrawer(false)} classes={{paper:'custom_drawer'}} ModalProps={{hideBackdrop:true}} variant="persistent" sx={{'& .MuiDrawer-paper':{backgroundColor: '#40E0D0'}}}>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary='Pinned Forums'>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton>
                            <ListItemText primary='Favorite Forums'>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>          
                    <ListItem >
                        <ListItemButton>
                            <ListItemText primary='Create a Forum'>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>          
                    <ListItem >
                        <ListItemButton onClick={toggleDrawer(false)}>
                            <ListItemText>Close</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )

}

export default SideBar