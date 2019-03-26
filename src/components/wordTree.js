import * as React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";
 
export default class WordTree extends React.Component {
  render() {
    return (
      <div className={"my-pretty-chart-container"}>
        <Chart
            width={'100%'}
            height={'100%'}
            chartType="WordTree"
            loader={<div>Loading Chart</div>}
            data={[
                ['phrase'],
                ['Emma enjoys programming in JavaScript'],
                ['Emma enjoys programming in Python'],
                ['Emma enjoys programming in Java'],
                ['Emma enjoys programming in ReactJS'],
                ['Emma knows database tools like SQL'],
                ['Emma knows database tools like MongoDB'],
                ['Emma knows database tools like PowerDesigner'],
                ['Emma knows webdev tech like HTML'],
                ['Emma knows webdev tech like CSS'],
                ['Emma knows webdev tech like SASS'],
                ['Emma knows webdev tech like  Bootstrap'],
                ['Emma likes watercolour painting'],
                ['Emma designs using Adobe Photoshop'],
                ['Emma designs using Adobe Illustrator'],
                ['Emma designs using Adobe InDesign'],
                ['Emma designs using CAD tools like SketchUp 3D'],
                ['Emma designs using CAD tools like AutoCAD'],
                ['Emma designs using CAD tools like Revit'],
                ['Emma designs using CAD tools like Maxwell Render'],
                ['Emma likes calligraphy'],
                ['Emma likes dogs, and has a mini long-haired dachshund called Hugo'],
                ['Emma likes electronics'],
                ['Emma uses technology like Git'],
                ['Emma uses technology like Command Line'],
                ['Emma uses technology like Jupyter Notebook'],
                ['Emma uses technology like Anaconda'],
                ['Emma uses technology like Google Cloud'],
                ['Emma uses technology like Heroku'],
                ['Emma uses technology like Sci-Kit Learn'],
                ['Emma uses technology like NLTK'],
                ['Emma has a Higher School Certificate'],
                ['Emma has a Advanced Diploma of Design'],
                ['Emma has a Bachelor of Science in Computing (almost)'],
                ['Emma teaches introduction to programming'],
                ['Emma teaches fundamentals of computer science'],
            ]}
            options={{
                wordtree: {
                format: 'implicit',
                word: 'Emma',
                },
            }}
            rootProps={{ 'data-testid': '1' }}
            />
      </div>
    );
  }
}