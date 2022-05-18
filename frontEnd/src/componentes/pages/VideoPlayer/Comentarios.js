import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '1080px',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));



function Comentarios({ comentario, ItemId }) {
  const classes = useStyles()
  const [comentarioId,setComentarioId] = useState('')
  
  function DeleteItem(item){
    setComentarioId(item)
    axios.post(`http://localhost:8081/Comment/${item}`).then((e)=>{
      console.log('Ta peganu')

    }).catch((err)=>{
      console.log(err)

    })
  }
 

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={comentario}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>

            </React.Fragment>
          }
        />
      </ListItem>
      <MdDeleteForever onClick={()=>{DeleteItem(ItemId)}} />
      <Divider variant="inset" component="li" />

    </List>

  )
}






export default Comentarios