import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const Popup = (props: { characters: string[], povCharacters: string[], show: boolean, onHide: () => void }) => {
  const [selected, setSelected] = useState("");
  const [charDetails, setCharDetails] = useState({
    name: "", gender: "",
    culture: "",
    allegiances: [],
    mother: "",
    born: "",
    aliases: [],
    spouse: "",
    father: "",
    died: "",
    titles: "",
    books: "",
    povBooks: "",
    tvSeries: "",
    playedBy: ""
  });

  const handleChange = (e: any) => {
    const getvalue = e.target.value;
    setSelected(getvalue);
  }

  const getCharDetails = () => {
    axios.get(selected)
      .then((response) => {
        const res = response.data;
        setCharDetails(res);
      });
  };

  useEffect(() => getCharDetails());

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      dialogClassName="modal-120w"
      aria-labelledby="example-custom-modal-styling-title">
      <Modal.Header closeButton >
        <Modal.Title id="example-custom-modal-styling-title">
          Characters
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='' style={{ width: '80em', marginLeft: "-50%" }} >
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>Character list</Card.Title>
                <hr></hr>
                <img src="data:image/png;base64,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" style={{ width: "100px", height: "100px" }}></img>

                <select style={{ width: "380px" }} onChange={(e) => handleChange(e)}>
                  {
                    props.characters.map((char: string) => {
                      return (
                        <option value={char} >{char}</option>
                      );
                    })
                  }
                </select>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Pov Character list</Card.Title>
                <hr></hr>
                <img src="data:image/png;base64,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" style={{ width: "100px", height: "100px" }}></img>

                <select style={{ width: "380px" }} onChange={(e) => handleChange(e)}>
                  <option value=""></option>
                  {
                    props.povCharacters.map((povChar: any) => {
                      return (
                        <option value={povChar}>{povChar}</option>
                      );
                    })
                  }
                </select>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Character details</Card.Title>
                <hr></hr>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA51BMVEVx4vD///84xtk2Z5ZUiKgSEUnC+/9DdZ5t4fA4ytw0ZZVk4O9y5vM3aZgQCUV05PEnRXNThaY2YZLi/f+d6/QPBENZ1uYkw9fJ//8hN2eo7PXW9vo3hqsRAERGeJ9dpb7L7vQOADuIvNG4zNlJkLMmWo7o+vy27/cfV3tDfqKF5vLz/P43or+P5/Njt81s1eWp4+xku9A3pMArjKc0tcvB8fhQnr1lyd1Zl7Q3l7c3sMlJpL6A1+QkcY8UHVEne5iV3eiTydklY4YbRGsXLlp6o70UG1AcSm8WKFcZOmMiaIgNADcpV4DP5DO+AAAPRklEQVR4nM3dfXvaRhIA8JUUHxISViPAuoKx8Z0DBWLLdsCOiZv4kl7TtPf9P8+tQGCB9mVmdoU7/zV9nti/zO7si1Yr5tQes1F/MR73OlfT6TSOGYvjeHrV6Y0Xw/5oVv+PZ3X+5aP+uDNlYRj6ebBy5H/A/0cYTzvj4ajOX6Iu4WjYm65oTBcr6bRXG7MO4WjR4YnT23acYciuFnUorQv7vRirK2WT9fq2fyGrwtmw4xN1L7n0rxZW649FYf+Kmrx9ZHg1tPdr2RKOeqbZ24kw7Njqk3aEi6lN3ir8cLqw8rtZEI56vA7WEWHYs5BIY+Hoynr6XsIPr4yNhsJafYWx/YrC2n2rCKdGRgPhYXwro0lbJQtnvUP5WN5WewcXLgBzaqtGnzp20ITtuJ7xQRVhTGuqJGGP4Iv5yjcqIo74fxGMpKZKEPYZtoHmNJY93F5fn5/f39+fX98+ZCyXIv8e3yesPPDCDjKBHPdwff7mbRGNZB1e4/LTAxoZdmoXIhMYRdntR+56s42Gt45mM3deXmf8XwARPsOmESkcYxIYR+z6Y1lXFq6ZHHl27aMyie2NKOFsigDGUXa+z9sXFsrLB4wxnKJWyBhhHzEGxtFDJX1iYY58N8EYcQUHIVwgEijziYWFEf7Xh+M6hIgaKm6fKmFuvPThRkRNhQpnU3ALjaNrqU8u9LwkuYYTfXBnBApH8C4YZR/lPpXQ895NMrDRZ8BJHEzYR7RQVQI1Qj5I3iJaKqzegIRDMDBm50qfRsjTeI8ggpYbECG8iEbZGw1QJ/SSCXxSDiIChPB5TJSpWyhE6CUNeGeEjBp6IQL4oPUBhF7Ts0rUCi0DAcKcCG+oWqJOiOiDD/omChPyqarFLGqEcGCcQXwwodds+dbKjVoIHyZYBvIBhV6zAZ/ka4hKIWag/2hV6DUntoZ+lXCEAOoGeqzQSx7hPz1UTeAUwhm8oUS3UCBY6CVLxGpNMQ1XCBGrCWCVQQm9pgv+BfwpRdhBpFC5miALTwM4Ub5elAoRK3q+nAADEUIvuYNnUT4syoSIMsoQbRQl5O0UQZQVVJkQ7uN1FAHECR8DRF+UVBuJEF5lWAyajpKEXjKHZ1FWbcRCzMYvpsxghbzYwImSrigUtjEbv7gU4oSrJMKJwqfhQiFmkx2ZQqRwlUQwMYYKe4iHL5jBniD0EteFE4WjokCIGSiQhRQvzMspnCgaMgRChI//syFTiBV6LReTRRHHqI1iptxEYbIMEES/+uitIkQsmRhiWUgWrmsNmFhdSFWEUwwQN2EjCb2kEAKJlXF/X4h5hEZppAThEkWs7GnsC3HHLLCDIUl4uRHCiL5aiCozLPaxPoLQa2yFIOJ+sdkVznAnSdDDPUmYuC6KGM4UQsS6Pg/U0pcuXOKIezObHSFupCBMaEjCYloDJ+6OGDvCK+RxrggPpAhPy0IA0b+SCbEpZAzfSAlCr7UjBBB3klgWYlNIGO9JwsR1ccSdJJaE6BRiF79k4RxLLCexJEQWUtKMhigMkMRyOX0RIsdCRhssSMKlux86YmlMfBGO0Qe3DyZ8v59DLdEfC4T4k83wB072hVpiVYh4GHpw4aNAqCGGw4oQty48qLApFGqI030hfrR/daGauB0wNkLcsumwQmE/1BG3i6iNEO87YC29kwjVWdwVovZIDy+UAJXEzd4pI85nVsJXm9NAiJt5DaMOhuwV56UwYlgWkhrpq60tgMSimTJ6I2WvtD6EEotmuhYSga+yxkcQX4TERvoq+zQI4rqZMupwvxISiillr00nlBDXgz4jzklXcfj9UhxxuhHi177b0B5ctyBsaFMoI67WwcygG1IerhGeW2i7oZS4WkIxg2546GdPaOKqI+ZCwkvHmzjk80MCMV4LDboh4fEa+RkwhZh3RGbSDQ/5HJ9EzEdERtlkK0ftZzHgwCox33JjhM38cqDX+dgTQ7BKKiHm2/uMPCkt4iBnouhZzIUmhYbVfa4tgdcZIZGXGmZUaNhBziYaEHmpYcjzJdWo83wpPoU8yh5/wYX0Gc06kNNvnBDv2yXyWQ1zrsyA2HKKESIL6TZKObviQoM5WxGo84kYYYvk2yHGXGgMxE1sMO9bVJ8boom+wwwHizURsYhCvTNDFm77YjhjlEcylajlvSdyGy1nMWwzw+FwHbW8u4YfCgXEsM8WVm4lq+P9Q4M2+kIMh5aE8HEfKCSN9QKiP2Zma6dSADeloO8BG/vWRL/HTKc0m7D8LrcNYE7kQuojCyoR9D5+yzVvowWxw4wnbduIQETInQrWgJxoUwi52QR0L4ZFoOtOGXVHXxQxgKi/2+TMJtA9sSpkcagdNLT301gYJmoUcuInszuGpCdLqBFYFvJJxFLdUtX3RLUUhxL+LkIWuuS7vpJTy7x6hCwMVGmUCptJC7G9DQ7b/XBNdN1P+Dv3mo9Wa+gmMpvjYYkYzHH3JibJZS2+uoR5FoP5Pfjuy6RZly8XWpuX7hP57/zpTRW5L2zy/ldP+1zHk7W1hYDoBsHy/u0ecleYJM3TZVCfz3Wf6xKuiXkil/f5Lcnb6tooJS9pXS7dWn1u+mxrjV8Nv/gZQRDMl58+FpdBv9ncBd2aPOa6Wnm58IYRTrADI3z5OUHe0ebz5fLu0+Pj4/u75dytOXdb4cLOXpuWWECDVUqDGgtLRThkmFs+jImHj7RvZc/7b0xMZzaeWyjC1/8ONYeVZ0+qePUs5s8Pa/4UzusCMwvPgHXxqllMny08x/9bE9Mb87MY+RcexBEW4Z+k+ggkYSocWjhP499fFvHxvBz/afe3MXyJcUcY16fl+PpLEb8aTg7S/DyNUTHlPr48KCJpvNl+iuTt28m/HVG0/yGIf/7rXfMlvJ+7gyK6XUPj6tQXfYUYRdfNpFla6zXK6yQxUSTkwNKKqvVz9+glut0PBm01MzqbGEe3rWRvOasnCoQqYG78TN5D5aXU4HxplE3K+YMSq0IN8Ojo+OIbcRuVFxryGeE4+vSu4oMQK0ItkMfg4gupqabrM8KkV4AfGonAByDuCyHAvKn+RtpMpZ7Vj6N7YQIhxDYJmDfVX9HE9In4vkWUyRIIILZpwFUasb0x3bxvgeyI0XW1wsCJbSpwPXDghJt3ZlAdMWaXGqCa2CYDeVz8ghv/nY0QMSJqWqie2DYA8jT+gWip+WhYCOFn26JbbQI1xLYJMC848OE/fXn/ELqTIRsEMcS2ETBvqV/AROdFCBwvost3UhKU2DYE5p0ROPo/lYSg8SJmE0AX1BHbpkDeGX+A6k06LAkhzZTXGGALVRLbxkA+ifsMqTepUxbqm2mUtXBACbFtDuRZPAIQn3aE2p3vOPOwQDGxbQHIS+pASywa6fZuE81CP86aeKCQ2LYBBBGdXaF60I9oQBGxbQWoJ66H+5JQOTeNMtg4DyG27QC1xHT/jiHV1neMLzJy4sgSkBOV5SZz9oXyITFmBsB94tv/2gLyivq7IoWLilA6JMYMOQ6qieWTCmZAPi7+kAudqlD2xYfoEjOT0RLP7AF5Fn+RtNNtndm5N1HSEeMHU+EO8UVoDjy6kN2RlYruTZTOa8yTWCZuhRaAA2kKnxyRUDpg+OSxQkDcCC0Aj7rSXii+v1S6vR9dwxdNWuKZPeCFdNsmc8RCaRKjiXESt8Qza8DBdxkwld0jLH9GQ5/TVIhntoBHXemAX07hrlCeRAvttCCe2QLK22gqv89bvky0UE8L4pmtDMrq6E4hrQgVHwQ0mrmViGdNK8Djz7I6Wh4Lq0L5p6xiG10xJ55ZAR5dSB/UlKYzIqF8JWylK3LimR2gYn/fUQvlS4zo3kJX9Fo/DSwAu/LnUOn+t8kq35mRrxMj1GaiVHhsDhx8k2cw2AdVhKrFvuEyypZw8JvUV+zkK4WK7+bFvnlBtSA8PlIAnyoewUeu5Ntu5A0pm0L1/kyVIxAqnkSZrxWNhcddxQP9zR6pRqj6vmNkSjQWKoHVNir5/qHimbAp0VB43JXefC1uoxKhqp4aEs2EamC1jkqFyjOnnGhQboyExwPVoZr0RmiRfEtWdZrPqKKaCAfqJ06ZmCL7HrDqSU10Qh/6DYR8oFdu4+O+B6w+vBCfkCdwdGH3u4InHiiUQvUXPeKTUyKRLNQc+pJ0QpXQ6amJ72n1hig81hyHEo6EOqH6RYz4ZE6apNKE3c+ak4mVFQVIqP44d3zinhLSSBJefNUdvpBUGZ1wpgDmxOAOP2wQhAPtgb208nlVoFC1MbXOoosuOHih/rSetIzqhZoDb5wY3CGPaGCFg4H2xKW8jAKEmsNSORHZG3HCY30P1AF1Qj3RDeaQ85gU4fHFH/rD3TqgVqj5lteKGNy1wHlECLu/A94l2d8dJQgBRN6QHptAI1jYHXwBnM/TZhAihBBzowdqqzDhcbcL8UGAECGgL66NkLYKER5ffAb5QECQUHOuryDy3+mukejmAHrh4K8fwHe50v1PcNOFzohpJnCFMZifajqkRti9OPoTehOIeNOCKHRmujnqJngiJ4kCqRJ2u399Q1zkopqq4YWO01Evpko/OXDfT6SZlAmPB93utw8p+P2tNFBMtmlC1S7qHjG//+LutCVMpUjIdRe/f0XwlOtBulBdUneJK+X8/Wl+VUtzp/jsCbscN/jx54c57qVmUBHFC51ZrOiMFeLqGhN3fnfZaOb30TTXrwt7Pw34YLd6w/fionv07c8PSxf9zrZ6MWEgVHdGAbFgcufy/ePl6elkMmn877cf375///rrlw938znpffT0BNoFCUI+v1EctBUTt05L79rrZ6JGQj5sKJ5MKYi2InVhoyBdqKyp9RMRNZQudEbyNNZMTFElhi7M0yjrjbUSCQmkCp3ZlfRkUW1EfA80EfLhX9ZUayKmmEHeitBxFr64qdZCTJ9QY6AdYf5kQ2i0T0wz4DrCttCZiY2WiWlG64A2hDKjTaKhz1jIY8yqNccWMTVqn7aEvObElURaIabps7HPjtBx2p19ozkxDajjw27YEfIOyRurb4+Ypk+G3W8btoQ82r2d1kon8t63IA9/lbAodHJkKZMkYsp5N/Z4jm0hj/Z4GhZKNDFN3aehVZ5TgzCPfm/qh3xShyDy3LnZjYXSWYlahDxm/XEnDsOTFIRLT54XdejyqEu4jlH/+cRdX4wohOV/nD0vbJVNYdQrXMVsNBzePD8/PWUnm82nk+zp6flmMRzZ7nSC+D+aJnkkLbRSYAAAAABJRU5ErkJggg==" style={{ width: "100px", height: "100px" }}></img>
                <div>{"name: " + charDetails.name} </div>
                <div> {"gender: " + charDetails.gender}</div>
                <div>{"culture : " + charDetails.culture }</div>
                <div> {"born: " + charDetails.born}</div>
                <div>{"died : " + charDetails.died}</div>
                <div>{"titles : " + charDetails.titles}</div>
                <div>{"aliases : " + charDetails.aliases}</div>
                <div>{"father : " + charDetails.father}</div>
                <div>{"mother : " + charDetails.mother}</div>
                <div>{"spouse : " + charDetails.spouse}</div>
                <div>{"allegiances : " + charDetails.allegiances}</div>
                <div>{"books : " + charDetails.books}</div>
                <div>{"povBooks : " + charDetails.povBooks}</div>
                <div>{"tvSeries : " + charDetails.tvSeries}</div>
                <div>{"playedBy : " + charDetails.playedBy}</div>
              </Card.Body>
            </Card>
          </CardGroup>

        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Popup;