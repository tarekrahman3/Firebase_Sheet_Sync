/*
https://medium.com/firebase-developers/sheets-to-firebase-33132e31935b
https://gist.github.com/edwinlee/85ac9033a133d056a8ded6b74f27f30f#file-code-gs
https://console.firebase.google.com/u/0/project/eliefares-bf7d6/database/eliefares-bf7d6-default-rtdb/data
*/
function getEnvironment()
{
  return {
    spreadsheetID:'',
    firabaseUrl:`https://${'id'}.firebasedatabase.app/`
  };
};

function importSheet()
{
  var dataToImport = {};
  var token = ScriptApp.getOAuthToken();
  var firebaseUrl = String(getEnvironment().firabaseUrl) + 'test/abd';
  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl, token)
  base.setData("", dataToImport);
}
