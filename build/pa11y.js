/**
 * Automated accessbility checks
 */

 const pa11y = require('pa11y');

async function runPa11y() {
	try {

		// Run tests against multiple URLs
		const pa11yTests = await Promise.all([
			pa11y('http://localhost:3000/'),
			// pa11y('http://example.com/otherpage/')
		]);
		
		// Format the errors
		const printResult = (result) => {
			if(result.issues.length < 1) {

				console.log("No A11y Errors Detected");

			} else {

				result.issues.forEach(function(issue) {
					console.log(`Page: ${result.pageUrl}`);
					console.log(`Issue: ${issue.message}`);
					console.log(`Code: ${issue.code}`);
					console.log(`Context: ${issue.context}`);
					console.log(`Selector: ${issue.selector}`);
					console.log("--------------------------------");
				});
			}
		};

		// Output the raw result objects
		pa11yTests.forEach(function(result) {
			printResult(result); 
		});

	} catch (error) {

		// Output an error if it occurred
		console.error(error.message);

	}
}

runPa11y();