import React from "react";
import ApodDate from "./ApodDate";
import ApodDescription from "./ApodDescription";
import ApodImage from "./ApodImage";
import ApodVideo from "./ApodVideo";
import ApodTitle from "./ApodTitle";
import ApodCopyright from "./ApodCopyright";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      justify:"center",
      alignItems:"center",
    },
  }));

function ApodSection(props) {
  // eslint-disable-next-line
    const classes = useStyles();
    var media_type ;
    if(props.data.media_type === "image"){
      media_type = <ApodImage url={props.data.url} />;
    }else{
      media_type = <ApodVideo url={props.data.url} />;
    }
  return (
    <div className={classes.root}>
        <br></br>
        <br></br>
        <Grid container spacing={2}>
        <Grid item xs={8}>
        {media_type}
        </Grid>
        <Grid item xs={3}>
          <br></br>
        <h2>
         Astronomy Picture of the Day
        </h2>
        <ApodDate date={props.data.date}/>
      <ApodTitle title={props.data.title}/>
     <hr></hr>
      <ApodDescription desc={props.data.explanation} />
      <ApodCopyright copyright={props.data.copyright} />
        </Grid>
        </Grid>
    </div>
  );
}

export default ApodSection;
