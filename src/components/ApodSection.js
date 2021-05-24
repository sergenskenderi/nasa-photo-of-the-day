import React from "react";
import ApodDate from "./ApodDate";
import ApodDescription from "./ApodDescription";
import ApodImage from "./ApodImage";
import ApodTitle from "./ApodTitle";
import ApodCopyright from "./ApodCopyright";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      margin: 'auto',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
  }));

function ApodSection(props) {
    const classes = useStyles();
  return (
    <div>
        <Grid container spacing={2}>
        <Grid item xs={8}>
        <ApodImage url={props.data.url} />
        </Grid>
        <Grid item xs={4}>
        <p>
         Astronomy Picture of the Day
        </p>
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
