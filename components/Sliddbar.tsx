import React from 'react';

function Slidebar() {
  return (
    <div>
      <div
        id="slide"
        className="h-[70vh] relative w-5/6 mx-auto mt-10 rounded-lg overflow-x-auto "
      >
        <div className="grid grid-flow-col auto-cols-[100%] absolute">
          {/* slick item */}

          <div className="h-[70vh] flex justify-between gap-4">
            <img
              src="/cats/cat-01.jpg"
              className="w-4/5 left-0 h-full rounded-lg  object-cover  flex-auto"
            />
            <article className="flex-auto text-center">
              <h2 className="text-2xl font-bold">American shothear</h2>

              <section className="">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem assumenda nihil facilis sapiente ipsum natus,
                </p>
              </section>
            </article>
          </div>

          <div className="h-[70vh] flex justify-between gap-4">
            <img
              src="/cats/cat-01.jpg"
              className="w-4/5 left-0 h-full rounded-lg  object-cover  flex-auto"
            />
            <article className="flex-auto text-center">
              <h2 className="text-2xl font-bold">American shothear</h2>

              <section className="">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem assumenda nihil facilis sapiente ipsum natus,
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slidebar;
