import React from "react";

function Example(props) {
  const { pronoun } = props;
  return (
    <div>
      <h2 className='font-bold text-gray-700 mt-4 text-xl md:text-2xl lg:text-3xl'>
        Example Usage
      </h2>
      {pronoun === "he" ? (
        <p className='text-gray-900 md:text-lg lg:text-xl'>
          <span className='italic'>He</span> was laughing when I called{" "}
          <span className='italic'>him</span> last week. I can tell that I made{" "}
          <span className='italic'>his</span> day. I'm happy he loves{" "}
          <span className='italic'>himself</span> a lot.
        </p>
      ) : null}

      {pronoun === "she" ? (
        <p className='text-gray-900 md:text-lg lg:text-xl'>
          <span className='italic'>She</span> was laughing when I called{" "}
          <span className='italic'>her</span> last week. I can tell that I made{" "}
          <span className='italic'>her</span> day. I'm happy she loves{" "}
          <span className='italic'>herself</span> a lot.
        </p>
      ) : null}

      {pronoun === "they" ? (
        <p className='text-gray-900 md:text-lg lg:text-xl'>
          <span className='italic'>They</span> were laughing when I called{" "}
          <span className='italic'>them</span> last week. I can tell that I made{" "}
          <span className='italic'>their</span> day. I'm happy they love{" "}
          <span className='italic'>themself</span> a lot.
        </p>
      ) : null}

      {pronoun === "er" ? (
        <p className='text-gray-900 md:text-lg lg:text-xl'>
          <span className='italic'>Er</span> lachte, als ich{" "}
          <span className='italic'>ihn</span> letzte Woche anrief. Ich kann
          sagen, dass ich <span className='italic'>seinen</span> Tag gemacht
          habe. Ich bin froh, dass er <span className='italic'>sich</span> sehr
          liebt.
        </p>
      ) : null}

      {pronoun === "sie" ? (
        <p className='text-gray-900 md:text-lg lg:text-xl'>
          <span className='italic'>Sie</span> lachte, als ich{" "}
          <span className='italic'>sie</span> letzte Woche anrief. Ich kann
          sagen, dass ich <span className='italic'>ihren</span> Tag gemacht
          habe. Ich bin froh, dass sie <span className='italic'>sich</span> sehr
          liebt.
          <br />
          <span className='italic'>Sie</span> lachten, als ich{" "}
          <span className='italic'>sie</span> letzte Woche anrief. Ich kann
          sagen, dass ich <span className='italic'>ihren</span> Tag gemacht
          habe. Ich bin froh, dass sie <span className='italic'>sich</span> sehr
          lieben.
        </p>
      ) : null}

      {pronoun === "attack-helicopter" ? (
        <p className='text-gray-900 md:text-lg lg:text-xl'>
          <span className='italic'>Attack helicopter</span> went
          wuppa-wuppa-wuppa when they flew by.
        </p>
      ) : null}
    </div>
  );
}

export default Example;
