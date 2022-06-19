## What is this PR do?

- `Introduction`: ex) 로그인 API에서 password validation error 수정 pull request
- `Notion Ticket`: [notion link]()
- `Figma`: [figma link]()

## Changes

- [ ] : password가 invalid 한 경우 400 에러를 반환한다.
- [ ] : password invalid 조건에 특수기호 포함 필수조건을 추가한다.

## Screenshot

- 이미지 첨부

## Test Checklist

- [ ] : password에 특수기호가 포함되있지 않은 경우 에러를 반환하는지
- [ ] : password에 특수기호가 포함되어 있을 경우 정상적으로 처리가 되는지
- [ ] : 400에러를 반환하는 exception handler가 작동하는지
