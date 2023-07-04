### `event.preventDefault()`?

```html
<form>
  <label>Username</label>
  <input name="username" />
  <label>Password</label>
  <input name="password" />
  <button>Login</button>
</form>
```

Automatic mechanism: When hitting `Login`, browser will collect data of all inputs and make network request:

```
tinhpv.com?username=tinhpv&password=passwordoftinhpv
```

Solution:

```javascript
const SearchBar = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        ...
    }

    return (...)
}
```
