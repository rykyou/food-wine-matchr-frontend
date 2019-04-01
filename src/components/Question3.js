import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, FormControlLabel, FormGroup, Grid, withStyles } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const styles = theme => ({
  formTop: {
    height: '10vh'
  },
  formMiddle: {
    height: '40vh',
    marginLeft: '5vh'
  },
  button: {
    margin: '2vh',
    minHeight: '8vh',
    minWidth: '12vh'
  },
});

class Question3 extends Component {
  firstVegetableCheckboxes = () => {
    const veggieArr = this.props.allFood.filter(food => food.category === "Vegetable")
    return veggieArr.slice(0, 6).map((veggie, index) => (
      <FormControlLabel
          key={veggie.id}
          label={(veggie.examples) ? `${veggie.name} (${veggie.examples})` : `${veggie.name}`}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.props.foodChecks[veggie.name]}
              value={veggie.name}
              onChange={(e) => this.props.handleCheckboxClick(e)}
            />
          }
      />)
    )
  }

  secondVegetableCheckboxes = () => {
    const veggieArr = this.props.allFood.filter(food => food.category === "Vegetable")
    return veggieArr.slice(6, 11).map((veggie, index) => (
      <FormControlLabel
          key={veggie.id}
          label={(veggie.examples) ? `${veggie.name} (${veggie.examples})` : `${veggie.name}`}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.props.foodChecks[veggie.name]}
              value={veggie.name}
              onChange={(e) => this.props.handleCheckboxClick(e)}
            />
          }
      />)
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid className={classes.formTop}>
          <h1>Vegetables:</h1>
        </Grid>
        <Grid container spacing={0} className={classes.formMiddle}>
          <Grid item xs={6}>
            <FormGroup>
              {this.firstVegetableCheckboxes()}
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              {this.secondVegetableCheckboxes()}
            </FormGroup>
          </Grid>
        </Grid>
        <Grid container justify="space-between">
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={this.props.goToPreviousQuestion}>
              Back
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={this.props.goToNextQuestion}>
              Next
          </Button>
        </Grid>
      </div>
    )
  }
}

Question3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question3);
