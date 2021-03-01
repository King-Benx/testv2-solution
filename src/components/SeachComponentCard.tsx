import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Link } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    fontFamily: "Poppins",
    maxWidth: 366.17,
    width: 366.17,
    height: 145,
    borderRadius: 120,
    zIndex: 0,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  topSection: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#F9F9FC",
    width: "100%",
    height: 81,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomSection: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: "100%",
    backgroundColor: "#EAE8FE",
    textAlign: "center",
    height: 41,
  },
  bottomLink: {
    color: "#8463E7",
    marginTop: 10,
    marginBottom: 15,
    fontWeight: 400,
  },
  linkEmphasis: {
    color: "#8463E7",
    fontWeight: 600,
    textDecoration: "underline",
  },
  profileSection: {
    width: 90,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profileDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  actionButtonSection: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  addIcon: {
    width: 46.68,
    height: 45,
    color: "#8463E7",
    borderColor: "#8463E7",
    marginRight: 18.87,
    borderRadius: 5,
  },
  header: {
    color: "#000000",
    fontWeight: 500,
    fontSize: 17,
  },
  contentText: {
    fontWeight: 400,
    color: "#818181",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    zIndex: 1,
    position: "relative",
    border: "2px solid #FFFFFF",
  },
  rating: {
    width: 27.74,
    height: 27.74,
    backgroundColor: "#6A3EEA",
    borderRadius: 13.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFFFFF",
    position: "absolute",
    top: -26.67,
    zIndex: 2,
  },
  ratingCurve: {
    marginleft: 13,
    position: "absolute",
    top: -13,
    left: 0,
    right: 0,
    bottom: 0,
    width: 89,
    height: 89,
    background:
      "linear-gradient(188.8deg, #FA5D75 6.7%, rgba(120, 100, 246, 0.67) 55.76%)",
    borderRadius: "50%",
    border: "1px solid #FFFFFF",
    boxSizing: "border-box",
  },
  circularBadge: {
    fontWeight: 500,
    fontSize: 13,
  },
});

interface Props {
  fullName: string;
  userId: number;
  trust: string;
  profileImageUrl: string;
}
const SearchComponent: FC<Props> = ({
  fullName,
  userId,
  trust,
  profileImageUrl,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root} key={userId}>
      <div className={classes.details}>
        <div className={classes.topSection}>
          <div className={classes.profileSection}>
            <div className={classes.rating}>
              <Typography className={classes.circularBadge}>{trust}</Typography>
            </div>
            <div className={classes.ratingCurve}>
              <img
                className={classes.profileImage}
                alt=""
                src={profileImageUrl}
              />
            </div>
          </div>
          <div className={classes.profileDetails}>
            <Typography className={classes.header}>{fullName}</Typography>
            <Typography className={classes.contentText}>
              nessuna connessione
            </Typography>
          </div>
          <div className={classes.actionButtonSection}>
            <Button variant="outlined" className={classes.addIcon}>
              <Add />
            </Button>
          </div>
        </div>
        <div className={classes.bottomSection}>
          <Typography className={classes.bottomLink}>
            Sta già condividendo{" "}
            <Link className={classes.linkEmphasis}>Disney Plus</Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default SearchComponent;
