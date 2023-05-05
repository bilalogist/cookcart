import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  Checkbox,
  FormControl,
  FormGroup,
  FormControlLabel,
  CircularProgress,
  Paper,
} from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function StoresModal({
  open,
  toggleModal,
  stores,
  setSelectedStores,
  selectedStores,
  loading,
  getStoreLocators,
}) {
  const handleChange = (st, e) => {
    const id = String(st.no);
    if (e.target.checked) {
      setSelectedStores([...selectedStores, id]);
    } else {
      const f = selectedStores.filter((s) => s !== id);
      setSelectedStores(f);
    }
  };

  return (
    <BootstrapDialog onClose={toggleModal} open={open}>
      <BootstrapDialogTitle onClose={toggleModal}>
        Select Stores
      </BootstrapDialogTitle>
      {loading ? (
        <Paper style={{ minWidth: 400, minHeight: 200 }}>
          <div className={"center"}>
            <CircularProgress style={{ color: "black" }} />
          </div>
        </Paper>
      ) : stores && stores.length > 0 ? (
        <DialogContent dividers>
          <FormGroup>
            {stores.map((st, key) => {
              return (
                <FormControlLabel
                  key={key}
                  control={
                    <Checkbox
                      checked={
                        !!selectedStores.find((s) => s === String(st.no))
                      }
                      onChange={(e) => handleChange(st, e)}
                    />
                  }
                  label={
                    st.name +
                    ", " +
                    st.streetAddress +
                    " " +
                    st.stateProvCode +
                    ", " +
                    st.zip
                  }
                />
              );
            })}
          </FormGroup>
        </DialogContent>
      ) : (
        <Paper style={{ minWidth: 400, minHeight: 200 }}>
          <div className={"center"}>
            <p>No Stores Found</p>
          </div>
          <div className={"center"}>
            <Button onClick={getStoreLocators}>Fetch Stores</Button>
          </div>
        </Paper>
      )}
      <DialogActions>
        <Button autoFocus onClick={toggleModal}>
          Close
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
