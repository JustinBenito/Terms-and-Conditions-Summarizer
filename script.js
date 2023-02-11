var datum = "";
const apikey = "Your API KEY";
const fireapi = async () => {
  console.log("Fired");
  var content = document.getElementById("input").value;
  const prom = content + "\n\nTl;dr";
  const result = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apikey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: prom,
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 1,
    }),
  });
  //the resultant json is stored into the data
  const data = await result.json();
  // const result = await fetch("https://api.openai.com/v1/engines/tldr/jobs", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer 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`,
  //   },
  //   body: JSON.stringify({
  //     prom,
  //   }),
  // });

  // // The resultant JSON is stored into the data
  // const data = await result.json();

  // Extract the summary from the response
  const summary = data.choices[0].text;
  console.log(summary);
  datum = summary;
  document.getElementById("input").value = "Points:" + summary;
  document.getElementById("status").innerHTML +=
    '<h1 id="done">😍Summary Generated✨</h1>';
  return summary;
};

document.getElementById("sub").addEventListener("click", fireapi);

var summary = datum;
// summary != null
//   ? (document.getElementById("input").value = summary)
//   : (document.getElementById("status").innerHTML +=
//       "<h1>Error Occured...</h1>");
