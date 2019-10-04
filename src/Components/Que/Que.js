import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
   
    margin:10
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'IRANSans',

  },
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();

  return (
    <div dir="rtl" className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.question}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {props.answer}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}















// import React from 'react';
// import ToggleDisplay from 'react-toggle-display';
// import './Que.css';
// const Que = (props)=>{

//     let dropDown ='backDownImage';
//     if(props.show){
//         dropDown='backBtnImage';
//     }

//     return (
//         <div>
//             <p className="App-intro">
//                 <button className={['QuestionBtn', dropDown].join(' ')}  onClick={props.clicked}>{props.question}</button>
//             </p>
//             <ToggleDisplay show={props.show}>
//               {props.answer}
//             </ToggleDisplay>

//         </div>
//     )
// }


// export default Que;







// import React, { Component } from 'react';
// import './Que.css';
// class QUe extends Component {
//   state = {
//     show: false
//   }
//   render() {
//         let dropDown ='backDownImage';
//     if(this.props.show){
//         dropDown='backBtnImage';
//     }
//     let answerClass='Q-containerHide'
//     if (this.props.show){
//       answerClass='Q-containerShow'
//     }
//     return (

//       <div>
//         <p className="App-intro">
//           <div className={['QuestionBtn', dropDown].join(' ')} onClick={this.props.clicked}>{this.props.question}

//             <div className={answerClass}>
//               {this.props.answer}
//             </div>

//           </div>
//         </p>


//       </div>
//     );
//   }
// }

// export default QUe;




