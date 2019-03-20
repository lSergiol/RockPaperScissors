class PlayRequest {
  constructor(outcomeObserver) {
    this.outcomeObserver = outcomeObserver;
  }

  playRound(p1, p2) {
    if (this.isInvalidThrow(p1, p2)) {
      this.outcomeObserver.invalid();
    }
    else if (p1 === p2) {
      this.outcomeObserver.tie();
    }
    else if (this.isP1Winner(p1, p2)) {
      this.outcomeObserver.p1Wins();
    }
    else {
      this.outcomeObserver.p2Wins();
    }
  }

  isP1Winner(p1, p2) {
    return p1 === 'Rock' && p2 === 'Scissors' || p1 === 'Paper' && p2 === 'Rock' || p1 === 'Scissors' && p2 === 'Paper';
  }

  isInvalidThrow(p1, p2) {
    return (p1 !== 'Rock' && p1 !== 'Paper' && p1 !== 'Scissors') || (p2 !== 'Rock' && p2 !== 'Paper' && p2 !== 'Scissors');
  }
}

module.exports.PlayRequest = PlayRequest;