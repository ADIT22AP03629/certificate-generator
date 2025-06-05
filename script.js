function generateMarksheet() {
  const roll = document.getElementById('roll').value;
  const name = document.getElementById('name').value;
  const father = document.getElementById('father').value;
  const trade = document.getElementById('trade').value;
  const iti = document.getElementById('iti').value;
  const nsqf = document.getElementById('nsqf').value;
  const dob = document.getElementById('dob').value;
  const examMonth = document.getElementById('examMonth').value;
  const traineeType = document.getElementById('traineeType').value;
  const resultDate = document.getElementById('resultDate').value;

  const th1 = parseInt(document.getElementById('th1').value) || 0;
  const es1 = parseInt(document.getElementById('es1').value) || 0;
  const pr1 = parseInt(document.getElementById('pr1').value) || 0;
  const fa1 = parseInt(document.getElementById('fa1').value) || 0;

  const th2 = parseInt(document.getElementById('th2').value) || 0;
  const es2 = parseInt(document.getElementById('es2').value) || 0;
  const pr2 = parseInt(document.getElementById('pr2').value) || 0;
  const fa2 = parseInt(document.getElementById('fa2').value) || 0;

  const total1 = th1 + es1 + pr1 + fa1;
  const total2 = th2 + es2 + pr2 + fa2;
  const total = total1 + total2;

  let photoURL = '';
  const photo = document.getElementById('photo').files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    photoURL = e.target.result;

    const cert = `
      <div style="text-align:center;">
        <img src="${photoURL}" width="100" height="120" style="border-radius:8px;border:2px solid #000"><br><br>
        <h2>CONSOLIDATED STATEMENT OF MARKS</h2>
        <p><strong>Roll No:</strong> ${roll}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Father's Name:</strong> ${father}</p>
        <p><strong>Trade Name:</strong> ${trade} | <strong>NSQF Level:</strong> ${nsqf}</p>
        <p><strong>ITI:</strong> ${iti}</p>
        <p><strong>Date of Birth:</strong> ${dob} | <strong>Exam Month-Year:</strong> ${examMonth}</p>
        <p><strong>Trainee Type:</strong> ${traineeType}</p>
        <table border="1" cellspacing="0" cellpadding="6" style="width:100%; margin-top:20px;">
          <thead>
            <tr><th>Year</th><th>Theory</th><th>ES</th><th>Practical</th><th>FA</th><th>Total</th></tr>
          </thead>
          <tbody>
            <tr><td>Year 1</td><td>${th1}</td><td>${es1}</td><td>${pr1}</td><td>${fa1}</td><td>${total1}</td></tr>
            <tr><td>Year 2</td><td>${th2}</td><td>${es2}</td><td>${pr2}</td><td>${fa2}</td><td>${total2}</td></tr>
            <tr><td colspan="5"><strong>Grand Total</strong></td><td><strong>${total}</strong></td></tr>
          </tbody>
        </table>
        <p><strong>Result Date:</strong> ${resultDate}</p>
        <p><strong>Result:</strong> ${total >= 720 ? 'Pass' : 'Fail'}</p>
      </div>
    `;

    document.getElementById('output').innerHTML = cert;
    document.getElementById('output').classList.remove('hidden');
    document.getElementById('downloadBtn').classList.remove('hidden');
  };
  reader.readAsDataURL(photo);
}

function downloadPDF() {
  const element = document.getElementById('output');
  html2pdf().from(element).save('DGT_Certificate.pdf');
}
