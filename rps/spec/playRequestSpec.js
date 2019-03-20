const {PlayRequest} = require('../src/playRequest');

describe('PlayRequest: playing one round of RPS', () => {

  describe('Tie outcome', () => {
    let outcomeObserverSpy;

    beforeEach(() => {
      outcomeObserverSpy = jasmine.createSpyObj('OutcomeObserver', ['tie']);
    });

    it('Calls tie on the outcome observer When P1 Throws Rock And P2 Throws Rock', () => {
      new PlayRequest(outcomeObserverSpy).playRound('Rock', 'Rock');

      expect(outcomeObserverSpy.tie).toHaveBeenCalled();
    });

    it('Calls tie on the outcome observer When P1 Throws Paper And P2 Throws Paper', () => {
      new PlayRequest(outcomeObserverSpy).playRound('Paper', 'Paper');

      expect(outcomeObserverSpy.tie).toHaveBeenCalled();
    });

    it('Calls tie on the outcome observer When P1 Throws Scissors And P2 Throws Scissors', () => {
      new PlayRequest(outcomeObserverSpy).playRound('Scissors', 'Scissors');

      expect(outcomeObserverSpy.tie).toHaveBeenCalled();
    });
  });

  describe('Invalid outcome', () => {
    let outcomeObserverSpy;

    beforeEach(() => {
      outcomeObserverSpy = jasmine.createSpyObj('OutcomeObserver', ['invalid']);
    });

    it('Calls invalid when P1 Throws Rock And P2 Throws Sailboat', () => {
      new PlayRequest(outcomeObserverSpy).playRound('Rock', 'Sailboat');

      expect(outcomeObserverSpy.invalid).toHaveBeenCalled();
    });

    it('Calls invalid when P1 Throws Sailboat And P2 Throws Rock', () => {
      new PlayRequest(outcomeObserverSpy).playRound('Sailboat', 'Rock');

      expect(outcomeObserverSpy.invalid).toHaveBeenCalled();
    });

    it('Calls invalid when P1 Throws Sailboat And P2 Throws Sailboat', () => {
      new PlayRequest(outcomeObserverSpy).playRound('Sailboat', 'Sailboat');

      expect(outcomeObserverSpy.invalid).toHaveBeenCalled();
    });

    it('Calls invalid when P1 Throws Sailboat1 And P2 Throws Sailboat2', () => {
      new PlayRequest(outcomeObserverSpy).playRound('Sailboat1', 'Sailboat2');

      expect(outcomeObserverSpy.invalid).toHaveBeenCalled();
    });
  });

  describe('Player 1 wins outcome', () => {
    let outcomeObserverSpy;

    beforeEach(() => {
      outcomeObserverSpy = jasmine.createSpyObj('OutcomeObserver', ['p1Wins']);
    });

    it('Calls p1Wins on the outcome observer When P1 Throws Rock And P2 Throws Scissors', () => {
      new PlayRequest(outcomeObserverSpy).playRound('Rock', 'Scissors');

      expect(outcomeObserverSpy.p1Wins).toHaveBeenCalled();
    });

    it('Calls p1Wins on the outcome observer When P1 Throws Paper And P2 Throws Rock', () => {
      new PlayRequest(outcomeObserverSpy).playRound('Paper', 'Rock');

      expect(outcomeObserverSpy.p1Wins).toHaveBeenCalled();
    });

    it('Calls p1Wins on the outcome observer When P1 Throws Scissors And P2 Throws Paper', () => {
      new PlayRequest(outcomeObserverSpy).playRound('Scissors', 'Paper');

      expect(outcomeObserverSpy.p1Wins).toHaveBeenCalled();
    });
  });

  describe('Player 2 wins outcome', () => {
    let outcomeObserverSpy;

    beforeEach(() => {
      outcomeObserverSpy = jasmine.createSpyObj('OutcomeObserver', ['p2Wins']);
    });

    it('Calls p2Wins on the outcome observer When P1 Throws Rock And P2 Throws Paper', () => {
      new PlayRequest(outcomeObserverSpy).playRound('Rock', 'Paper');

      expect(outcomeObserverSpy.p2Wins).toHaveBeenCalled();
    });

    it('Calls p2Wins on the outcome observer When P1 Throws Paper And P2 Throws Scissors', () => {
      new PlayRequest(outcomeObserverSpy).playRound('Paper', 'Scissors');

      expect(outcomeObserverSpy.p2Wins).toHaveBeenCalled();
    });

    it('Calls p2Wins on the outcome observer When P1 Throws Scissors And P2 Throws Rock', () => {
      new PlayRequest(outcomeObserverSpy).playRound('Scissors', 'Rock');

      expect(outcomeObserverSpy.p2Wins).toHaveBeenCalled();
    });
  });
});