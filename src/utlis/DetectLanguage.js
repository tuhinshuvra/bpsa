
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}


// function to strip HTML tags from a string
export const stripHTMLTags = (htmlString) => {
  const tempElement = document.createElement('div');
  tempElement.innerHTML = htmlString;
  return tempElement.textContent || '';
}

// function to slice the text differently based on language
export const sliceTextWithMaxLength = (text, maxLength) => {
  const regexBengali = /^[\u0980-\u09FF\s]+$/;
  const regexEnglish = /^[A-Za-z\s]+$/;

  let slicedText = '';
  let charCount = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char.match(regexBengali)) {
      if (charCount < 160) {
        slicedText += char;
        charCount++;
      }
    } else if (char.match(regexEnglish)) {
      if (charCount < 150) {
        slicedText += char;
        charCount++;
      }
    } else {
      // Other characters (e.g., HTML tags), add them without counting towards charCount
      slicedText += char;
    }

    if (charCount === maxLength) {
      break;
    }
  }

  return slicedText;
}

