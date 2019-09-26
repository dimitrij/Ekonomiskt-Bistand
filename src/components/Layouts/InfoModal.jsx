import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import SVG from '../svg/SVG'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none'
  },
  paper: {
    width: '80%',
    minHeight: '90%',
    padding: theme.spacing(2, 4, 3),
    background: 'white',
    top: 100,
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderBottom: '1px solid lightgray'
  },
  title: {
    color: '#D34F98',
    width: '50%',
    textAlign: 'center'
  },
  headerButton: {
    fontSize: 15,
    position: 'absolute',
    top: '50%',
    right: 10,
    marginTop: -20,
    borderRadius: 0
  },
  modalBody: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  modalBodyTop: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  mainIconHolder: {
    height: 270,
    width: 270,
    background: '#F5F5F5',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99
  },
  modalBodyBottom: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
}));

const InfoModal = ({ title, info, id, modalStatus, setModalStatus }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  useEffect(() => {
    setOpen(modalStatus);
  }, [modalStatus])
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={open}
        onClose={() => { handleClose(); setModalStatus(false) }}
        className={classes.modal}
      >
        <div className={classes.paper}>
          <div className={classes.header}>
            <h4 id="modal-title" className={classes.title}>{title}</h4>
            <IconButton className={classes.headerButton} onClick={() => setModalStatus(false)}>done</IconButton>
          </div>
          <div className={classes.modalBody}>
            <div className={classes.modalBodyTop}>
              <div style={{ position: 'absolute', height: '100%', width: '100%', overflow: 'hidden', opacity: 0.5 }}>
                {[10, 200, 30, 40, 500, 60, 7, 1, 2, 3, 4, 5, 6, 7].map((i, index) => {
                  function rand(x) {
                    return Math.round(Math.random() * x);
                  }
                  function getModalStyle() {
                    const top = rand(100);
                    const left = rand(100);
                    return {
                      top: `${top}%`,
                      left: `${left}%`,
                      transform: `rotate(-${rand(360)}deg)`,
                    };
                  }
                  return (<div key={index} style={{ position: 'absolute', ...getModalStyle() }}><SVG id={id} height="20" width="20" /></div>)
                })
                }
              </div>

              <div className={classes.mainIconHolder}>
                <SVG id={id} />
              </div>
            </div>
            <div className={classes.modalBodyBottom}>
              <p id="modal-description" style={{ textAlign: 'center' }}>
                {info}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div >
  );
}
export default InfoModal;