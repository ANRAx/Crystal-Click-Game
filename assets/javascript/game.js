var computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
var winCount = 0;
var loseCount = 0;
var diamondChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var rubyChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var emeraldChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var topazChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var userTotalScore = 0;

function shuffleCrystalValues(){
	diamondChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	rubyChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	emeraldChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	topazChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}

function gamePlay(){
	if(userTotalScore === computerChoice){
		winCount++;
		$('#win-counter').text(winCount);
		$('#finalTotal').text('You win!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#finalTotal').text(userTotalScore);
		shuffleCrystalValues();
	} else if(userTotalScore > computerChoice){
		loseCount++;
		$('#loss-counter').html(loseCount);
		$('#finalTotal').text('You lose!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#finalTotal').text(userTotalScore);
		shuffleCrystalValues();
	}
}

$('#random-number').text(computerChoice);

$('#diamond').on('click', function(){
	userTotalScore += diamondChoice;
	$('#finalTotal').text(userTotalScore);
	gamePlay();
});

$('#ruby').on('click', function(){
	userTotalScore += rubyChoice;
	$('#finalTotal').text(userTotalScore);
	gamePlay();
});

$('#emerald').on('click', function(){
	userTotalScore += emeraldChoice;
	$('#finalTotal').text(userTotalScore);
	gamePlay();
});

$('#topaz').on('click', function(){
	userTotalScore += topazChoice;
	$('#finalTotal').text(userTotalScore);
	gamePlay();
});
