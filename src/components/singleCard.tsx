import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import { CharacterInterface } from "../controller/interfaces";

const useStyles = makeStyles(() => ({
  root: {
    margin: 10,
  },
}));

export default function SingleChar({ char }: { char: CharacterInterface }) {
  const classes = useStyles();
  return (
    <Card elevation={4} variant="elevation" className={classes.root}>
      <CardContent>
        <Typography component="span" align="center" color="secondary">
          {char.char}
        </Typography>
        <Typography component="span" align="center" color="primary">
          {char.symbol ? `( ${char.symbol} )` : null}
        </Typography>
        <Typography component="span" align="center" color="secondary">
          {` : `}
        </Typography>
        <Typography component="span" align="center" color="secondary">
          {char.num}
        </Typography>
      </CardContent>
    </Card>
  );
}
