import React from 'react';
import { Typography, Box, Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(3)
  },
  tableContainer: {
    padding: theme.spacing(3)
  }
}));

const WebSites = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Paper elevation={1} className={classes.tableContainer}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Turpis in eu mi bibendum. Turpis in eu mi
          bibendum neque egestas. Lorem mollis aliquam ut porttitor leo a. Sit
          amet massa vitae tortor condimentum. Tristique magna sit amet purus
          gravida quis blandit. Purus non enim praesent elementum facilisis leo
          vel fringilla est. Fusce ut placerat orci nulla. Lorem ipsum dolor sit
          amet consectetur. Leo duis ut diam quam nulla porttitor massa. Aliquam
          vestibulum morbi blandit cursus risus at. Orci porta non pulvinar
          neque laoreet suspendisse. Augue eget arcu dictum varius duis.
          Consequat ac felis donec et odio pellentesque diam volutpat. Semper
          auctor neque vitae tempus quam pellentesque nec nam aliquam. Eu
          scelerisque felis imperdiet proin fermentum. Nisl purus in mollis nunc
          sed. Quis blandit turpis cursus in hac habitasse. Eros donec ac odio
          tempor. Quam lacus suspendisse faucibus interdum posuere lorem. Nunc
          mattis enim ut tellus elementum sagittis vitae et leo. Id ornare arcu
          odio ut sem nulla. Nec ultrices dui sapien eget mi proin sed libero.
          Purus faucibus ornare suspendisse sed nisi lacus sed. Nunc pulvinar
          sapien et ligula ullamcorper malesuada proin libero nunc. Tincidunt
          nunc pulvinar sapien et ligula ullamcorper malesuada proin. Mauris
          nunc congue nisi vitae suscipit. Lectus proin nibh nisl condimentum id
          venenatis a condimentum vitae. Sapien nec sagittis aliquam malesuada
          bibendum arcu vitae elementum. Tortor posuere ac ut consequat semper
          viverra nam libero. Eros in cursus turpis massa tincidunt dui.
          Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Sit
          amet risus nullam eget felis eget nunc lobortis. Odio eu feugiat
          pretium nibh ipsum consequat. Pharetra magna ac placerat vestibulum
          lectus mauris ultrices eros. Bibendum enim facilisis gravida neque
          convallis. Orci dapibus ultrices in iaculis nunc sed augue lacus. Non
          sodales neque sodales ut etiam. Lectus proin nibh nisl condimentum.
          Tellus mauris a diam maecenas sed enim. A condimentum vitae sapien
          pellentesque habitant morbi tristique. Ut tortor pretium viverra
          suspendisse potenti nullam. Ullamcorper a lacus vestibulum sed arcu
          non odio. Sagittis orci a scelerisque purus. Neque sodales ut etiam
          sit. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae
          auctor. Pellentesque adipiscing commodo elit at imperdiet dui. Odio
          tempor orci dapibus ultrices in. Pharetra convallis posuere morbi leo
          urna. Hendrerit gravida rutrum quisque non. Volutpat odio facilisis
          mauris sit amet massa vitae tortor condimentum. Sed ullamcorper morbi
          tincidunt ornare massa eget egestas purus. Quis risus sed vulputate
          odio ut enim blandit volutpat. Eget dolor morbi non arcu risus quis
          varius. A condimentum vitae sapien pellentesque habitant morbi
          tristique. Pulvinar sapien et ligula ullamcorper malesuada. Neque
          aliquam vestibulum morbi blandit. Ut diam quam nulla porttitor massa
          id. Vel turpis nunc eget lorem. Faucibus nisl tincidunt eget nullam
          non. Eu volutpat odio facilisis mauris sit amet massa. Dictum fusce ut
          placerat orci. Eu augue ut lectus arcu bibendum at. Felis donec et
          odio pellentesque. Neque aliquam vestibulum morbi blandit. Aliquam
          vestibulum morbi blandit cursus risus at ultrices mi. Et odio
          pellentesque diam volutpat commodo. Pharetra convallis posuere morbi
          leo urna molestie at. Nam libero justo laoreet sit amet cursus sit
          amet. Semper quis lectus nulla at volutpat. Curabitur vitae nunc sed
          velit dignissim sodales ut. Euismod nisi porta lorem mollis aliquam
          ut. In fermentum et sollicitudin ac orci phasellus egestas. At
          elementum eu facilisis sed odio morbi quis commodo odio. Iaculis urna
          id volutpat lacus laoreet. Tellus molestie nunc non blandit massa enim
          nec. Bibendum est ultricies integer quis auctor elit sed. Orci
          phasellus egestas tellus rutrum tellus. Massa id neque aliquam
          vestibulum morbi blandit cursus risus. Dictum at tempor commodo
          ullamcorper. Rutrum tellus pellentesque eu tincidunt tortor aliquam
          nulla facilisi cras. Dolor sed viverra ipsum nunc aliquet bibendum
          enim. Egestas pretium aenean pharetra magna ac. Ullamcorper velit sed
          ullamcorper morbi tincidunt ornare massa eget. Ut venenatis tellus in
          metus vulputate eu. Elementum facilisis leo vel fringilla est
          ullamcorper eget. Enim eu turpis egestas pretium aenean pharetra
          magna.
        </Typography>
      </Paper>
    </Container>
  );
};
export default WebSites;
