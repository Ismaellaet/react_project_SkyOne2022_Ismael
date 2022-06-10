import React from "react";
import Board from "./Board";

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
		};
	}

	render() {
		const winner = this.calculateWinner(this.state.squares);
		const status = winner
			? `Winner: ${winner}`
			: `Next player: ${this.getSquareValue()}`;

		return (
			<div className="game">
				<div className="game-board">
					<Board
						squares={this.state.squares}
						onClick={i => this.handleClick(i)}
					/>
				</div>

				<div className="game-info">
					<div>{status}</div>
				</div>
			</div>
		);
	}

	handleClick(i) {
		const squares = this.state.squares;

		// Ignores the click if the game has a winner or the square is already marked
		if (this.calculateWinner(squares) || squares[i]) return;

		squares[i] = this.getSquareValue(); // Set square value

		this.setState({
			squares,
			xIsNext: !this.state.xIsNext,
		});
	}

	calculateWinner(squares) {
		const linesToWin = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		const isWinner = () => {
			for (let i = 0; i < linesToWin.length; i++) {
				const [a, b, c] = linesToWin[i];
				const symbolsMatch =
					squares[a] &&
					squares[a] === squares[b] &&
					squares[a] === squares[c];

				if (symbolsMatch) {
					return squares[a];
				}
			}

			return false;
		};

		return isWinner();
	}

	getSquareValue() {
		return this.state.xIsNext ? "X" : "O";
	}
}
