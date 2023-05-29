import './Start.css'

const Start = (props: any) => {

  return (
    <>
      <h1 className="title">Trivia quiz</h1>
      <div className='options'>
        <select
          style={{ marginBottom: "1rem" }}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            props.setChoosenCategory(event.target.value)
          }
          name="categoryOptions"
          id="categoryOptions">
          <option value={0}>Choose category</option>
          {props.categoryOptions.map((x: any) => (
            <option key={x.id} value={x.id}>
              {x.name}
            </option>
          ))}
        </select>

        <select
          style={{ marginBottom: "1rem" }}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            props.setChoosenDifficulty(event.target.value)
          }
          name="choosenDifficulty"
          id="choosenDifficulty">
          <option value={0}>Choose difficulty</option>
          <option value={"easy"}>Easy</option>
          <option value={"medium"}>Medium</option>
          <option value={"hard"}>Hard</option>
        </select>
      </div>
      <button
        disabled={!props.choosenCategory}
        className="startButton"
        onClick={props.dohvatiPodatke}>
        Start
      </button>
    </>
  );
};

export default Start;
