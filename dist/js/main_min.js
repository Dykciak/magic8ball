var ball,askInput,answer,errorInfo,answerArray=["Tak.","Nie.","Być Może.","Nie chcesz znać odpowiedzi na to pytanie.","Nie wiem."],main=function(){prepareDOMElements(),prepareDOMEvents()},prepareDOMElements=function(){ball=document.querySelector("img"),askInput=document.querySelector(".ask-input"),answer=document.querySelector(".answer"),errorInfo=document.querySelector(".error")},prepareDOMEvents=function(){ball.addEventListener("click",shake)},shake=function(){ball.classList.add("shake-animation"),setTimeout(function(){ball.classList.remove("shake-animation")},1100),""!==askInput.value&&"?"===askInput.value.slice(-1)?(setTimeout(randomAnswer,1e3),errorInfo.textContent=""):""!==askInput.value&&"?"!==askInput.value.slice(-1)?(answer.textContent="",setTimeout(function(){errorInfo.textContent="Musisz zakończyć pytanie znakiem zapytania."},1e3)):(answer.textContent="",setTimeout(function(){errorInfo.textContent="Musisz napisać pytanie."},1e3))},randomAnswer=function(){answer.textContent=answerArray[Math.floor(Math.random()*answerArray.length)]};document.addEventListener("DOMContentLoaded",main);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYmFsbCIsImFza0lucHV0IiwiZXJyb3JJbmZvIiwiZG9jdW1lbnQiLCJwcmVwYXJlRE9NRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yIiwicHJlcGFyZURPTUV2ZW50cyIsInNoYWtlIiwiYW5zd2VyIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJhbmRvbUFuc3dlciIsInRleHRDb250ZW50IiwicmVtb3ZlIiwidmFsdWUiLCJzbGljZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbnN3ZXJBcnJheSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIm1haW4iXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLEtBQ0FDLFNBREFELE9BQ0FDLFVBRUFDLFlBQVMsQ0FFYixPQVFBLE9BTEMsWUFDQSw0Q0FPQSxhQUlBRCxLQUFXRSxXQU5YQyxtQkFPa0JDLEVBTmxCQyxpQkFPWUgsQ0FDYixFQUdLQyxtQkFBa0IsV0FDdEJKLEtBQUFHLFNBQUFFLGNBQUEsS0FBQSxFQUVESixTQUFjRSxTQUFSSSxjQUFjLFlBQUEsRUFSbkJDLE9BU0tDLFNBQVVDLGNBQUksU0FBa0IsRUFSckNSLFVBU1dDLFNBQUFFLGNBQU0sUUFBQSxDQVJsQixFQVdLSixpQkFBbUIsV0FSdkJELEtBU0NXLGlCQUFXQyxRQUFjTCxLQUFLLENBUmhDLEVBV0VDLE1BQU9LLFdBUlJiLEtBU0NXLFVBQVdELElBQUEsaUJBQU0sRUFSbEJDLFdBU0VULFdBUkRGLEtBU0dTLFVBQUtLLE9BQUEsaUJBQUEsQ0FSVCxFQVNDLElBQUEsRUFDa0IsS0FBbEJOLFNBQU9LLE9BQWdCLE1BQUFaLFNBQUFjLE1BQUFDLE1BQUEsQ0FBQSxDQUFBLEdBUnZCTCxXQVNBQSxhQUFpQixHQUFBLEVBUmpCVCxVQVNDQSxZQUFVVyxJQUNILEtBQUFaLFNBQUFjLE9BQUEsTUFBQWQsU0FBQWMsTUFBQUMsTUFBQSxDQUFBLENBQUEsR0FDVFIsT0FBQUssWUFBQSxHQUNBRixXQUFBLFdBRURULFVBQU1VLFlBQWUsNkNBQ3BCSixFQUFBQSxHQUFPSyxJQUlSVixPQUFTYyxZQUFBQSxHQVhQTixXQUFXLFdBQ1ZULFVBQVVXLFlBQWMseUJBQ3pCLEVBQUcsR0FBSSxFQUVULEVBRU1ELGFBQWUsV0FDcEJKLE9BQU9LLFlBQ05LLFlBQVlDLEtBQUtDLE1BQU1ELEtBQUtFLE9BQU8sRUFBSUgsWUFBWUksTUFBTSxFQUMzRCxFQUVBbkIsU0FBU2MsaUJBQWlCLG1CQUFvQk0sSUFBSSIsImZpbGUiOiJtYWluX21pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBiYWxsO1xubGV0IGFza0lucHV0O1xubGV0IGFuc3dlcjtcbmxldCBlcnJvckluZm87XG5cbmNvbnN0IGFuc3dlckFycmF5ID0gW1xuXHRcIlRhay5cIixcblx0XCJOaWUuXCIsXG5cdFwiQnnEhyBNb8W8ZS5cIixcblx0XCJOaWUgY2hjZXN6IHpuYcSHIG9kcG93aWVkemkgbmEgdG8gcHl0YW5pZS5cIixcblx0XCJOaWUgd2llbS5cIixcbl07XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG5cdHByZXBhcmVET01FbGVtZW50cygpO1xuXHRwcmVwYXJlRE9NRXZlbnRzKCk7XG59O1xuXG5jb25zdCBwcmVwYXJlRE9NRWxlbWVudHMgPSAoKSA9PiB7XG5cdGJhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuXHRhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNrLWlucHV0XCIpO1xuXHRhbnN3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFuc3dlclwiKTtcblx0ZXJyb3JJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKTtcbn07XG5cbmNvbnN0IHByZXBhcmVET01FdmVudHMgPSAoKSA9PiB7XG5cdGJhbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNoYWtlKTtcbn07XG5cbmNvbnN0IHNoYWtlID0gKCkgPT4ge1xuXHRiYWxsLmNsYXNzTGlzdC5hZGQoXCJzaGFrZS1hbmltYXRpb25cIik7XG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGJhbGwuY2xhc3NMaXN0LnJlbW92ZShcInNoYWtlLWFuaW1hdGlvblwiKTtcblx0fSwgMTEwMCk7XG5cdGlmIChhc2tJbnB1dC52YWx1ZSAhPT0gXCJcIiAmJiBhc2tJbnB1dC52YWx1ZS5zbGljZSgtMSkgPT09IFwiP1wiKSB7XG5cdFx0c2V0VGltZW91dChyYW5kb21BbnN3ZXIsIDEwMDApO1xuXHRcdGVycm9ySW5mby50ZXh0Q29udGVudCA9IFwiXCI7XG5cdH0gZWxzZSBpZiAoYXNrSW5wdXQudmFsdWUgIT09IFwiXCIgJiYgYXNrSW5wdXQudmFsdWUuc2xpY2UoLTEpICE9PSBcIj9cIikge1xuXHRcdGFuc3dlci50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRlcnJvckluZm8udGV4dENvbnRlbnQgPSBcIk11c2lzeiB6YWtvxYRjennEhyBweXRhbmllIHpuYWtpZW0gemFweXRhbmlhLlwiO1xuXHRcdH0sIDEwMDApO1xuXHR9IGVsc2Uge1xuXHRcdGFuc3dlci50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRlcnJvckluZm8udGV4dENvbnRlbnQgPSBcIk11c2lzeiBuYXBpc2HEhyBweXRhbmllLlwiO1xuXHRcdH0sIDEwMDApO1xuXHR9XG59O1xuXG5jb25zdCByYW5kb21BbnN3ZXIgPSAoKSA9PiB7XG5cdGFuc3dlci50ZXh0Q29udGVudCA9XG5cdFx0YW5zd2VyQXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYW5zd2VyQXJyYXkubGVuZ3RoKV07XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBtYWluKTtcbiJdfQ==
