import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../redux/asyncActions/character";
import { decrement, increment } from "../redux/reducers/counter";

const ListCharacter = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.character.results);

  React.useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div>
      <Row>
        {data.results &&
          data.results.map((char) => {
            return (
              <Col md={4}>
                <Image src={char.image} fluid />
              </Col>
            );
          })}
      </Row>
      <button
        disabled={data?.info?.prev === null}
        onClick={() => data.info.prev && dispatch(getAll(data.info.prev))}
      >
        Prev Page
      </button>
      <button
        disabled={data?.info?.next === null}
        onClick={() => data.info.next && dispatch(getAll(data.info.next))}
      >
        Next Page
      </button>
    </div>
  );
};

const Counter = () => {
  const dispatch = useDispatch();
  const i = useSelector((state) => state.counter.num);

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <h1>{i}</h1>
      <button
        onClick={() =>
          dispatch(
            increment({
              name: "Rick",
              age: 24
            })
          )
        }
      >
        Increment
      </button>
    </div>
  );
};

export default function TesRedux() {
  return (
    <>
      <ListCharacter />
    </>
  );
}
