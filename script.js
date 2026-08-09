const BACKEND_URL =
  "https://principles-hobby-pmid-sign.trycloudflare.com";

async function answerQuestion() {
  const questionInput = document.getElementById("question");
  const answerBox = document.getElementById("answer");

  const question = questionInput.value.trim();

  if (!question) {
    answerBox.textContent = "😊 पहले कोई सवाल लिखिए!";
    return;
  }

  answerBox.textContent = "🤖 AI जवाब दे रहा है...";

  try {
    const response = await fetch(`${BACKEND_URL}/api/ask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "AI से जवाब नहीं मिला।");
    }

    answerBox.textContent = data.answer;

  } catch (error) {
    console.error(error);
    answerBox.textContent =
      "माफ़ कीजिए, अभी AI से जवाब नहीं मिल पाया।";
  }
    }
