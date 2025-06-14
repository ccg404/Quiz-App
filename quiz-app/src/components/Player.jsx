function Player({playerName, playerLvl = 6, age, skills, experience}) {  
  return (
    <div>
        Welcome {playerName}, Level: {playerLvl > 5 ? "Player Strong" : "Player to noob"}
        <p>
            Age: {age >= 30 ? "Boomer" : "Adult"}<br />
            Skills: {skills ? skills : "None"}<br />
            Experience: {experience ? experience : "No experience"}
        </p>
    </div>
  );
}

export default Player;