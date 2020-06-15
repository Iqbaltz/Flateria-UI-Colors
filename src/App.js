import React, { useState, useEffect } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

function App() {
	const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
	const [ palettes, setPalettes ] = useState(savedPalettes || seedColors);
	const findPalette = (id) => {
		return palettes.find((palette) => {
			return palette.id === id;
		});
	};

	useEffect(
		() => {
			window.localStorage.setItem('palettes', JSON.stringify(palettes));
		},
		[ palettes ]
	); // run whenever palettes is changed

	const savePalette = (newPalette) => {
		setPalettes([ ...palettes, newPalette ]);
	};

	const deletePalette = (id) => {
		setPalettes(palettes.filter((palette) => palette.id !== id));
	};

	return (
		<Switch>
			<Route
				exact
				path="/palette/new"
				render={(routeProps) => (
					<NewPaletteForm savePalette={savePalette} {...routeProps} palettes={palettes} />
				)}
			/>
			<Route
				exact
				path="/"
				render={(routeProps) => (
					<PaletteList palettes={palettes} deletePalette={deletePalette} {...routeProps} />
				)}
			/>
			<Route
				exact
				path="/palette/:id"
				render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
			/>
			<Route
				exact
				path="/palette/:paletteId/:colorId"
				render={(routeProps) => (
					<SingleColorPalette
						colorId={routeProps.match.params.colorId}
						palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
					/>
				)}
			/>
		</Switch>
	);
}

export default App;
