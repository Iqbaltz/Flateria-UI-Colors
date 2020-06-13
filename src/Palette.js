import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';
import Navbar from './Navbar';
import Footer from './Footer';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500, format: 'hex' };
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
	}

	changeFormat(val) {
		this.setState({ format: val });
	}

	render() {
		const { level, format } = this.state;
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { classes } = this.props;
		const colorBoxes = colors[level].map((color) => (
			<ColorBox
				background={color[format]}
				name={color.name}
				key={color.id}
				moreUrl={`/palette/${id}/${color.id}`}
				showFullPalette
			/>
		));
		return (
			<div className={classes.Palette}>
				<Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} showLevel />
				<div className={classes.colors}>{colorBoxes}</div>
				<Footer paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
