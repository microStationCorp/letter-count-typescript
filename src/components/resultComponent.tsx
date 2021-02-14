import { Grid } from "@material-ui/core";
import { CharacterInterface } from "../controller/interfaces";
import SingleChar from "./singleCard";

export default function ResultComponent({
  chars,
}: {
  chars: CharacterInterface[];
}) {
  return (
    <div>
      <div>result component</div>
      <Grid container>
        {chars.length !== 0 ? (
          <>
            {chars.map((c) => (
              <Grid item key={c.char}>
                <SingleChar char={c} />
              </Grid>
            ))}
          </>
        ) : null}
      </Grid>
    </div>
  );
}
