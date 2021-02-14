import { Button, Grid, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";

export default function InputComponent({ setFunc }: { setFunc: Function }) {
  const [textLocal, setTextLocal]: [text: String, setText: Function] = useState(
    ""
  );
  const [isDisable, setDisable] = useState(true);

  useEffect(() => {
    if (textLocal) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [textLocal]);

  const ButtonClickHandler = () => {
    setFunc(textLocal);
    setTextLocal("");
  };
  return (
    <>
      <div>
        <Grid container justify="center">
          <Grid item lg={8} md={8} sm={8} xs={8}>
            <TextField
              multiline
              rows={4}
              variant="outlined"
              required
              fullWidth
              label="input box"
              value={textLocal}
              onChange={(e) => setTextLocal(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <Button
              color="primary"
              size="small"
              variant="contained"
              onClick={ButtonClickHandler}
              disabled={isDisable}
            >
              Check
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
