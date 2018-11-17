/*来自https://www.nowcoder.com/profile/9570699/codeBookDetail?submissionId=32419142*/
function GetNumberOfK(data, k) {
  // write code here
  let start = 0;
  let len = data.length;
  let end = len - 1;
  if (len == 0 || data[0] > k || data[end] < k) {
    return 0
  };
  start = (function (data, start, end, k) {
    let mid, val;
    while (start < end) {
      mid = start + Math.floor((end - start) / 2);
      val = data[mid];
      if (val < k) {
        start = mid + 1;
      } else if (val > k) {
        end = mid - 1;
      } else {
        if (start == mid || (data[mid - 1] != k)) {
          return mid;
        } else {
          end = mid - 1;
        }
      }
    }
    return data[start] == k ? start : -1;
  })(data, start, end, k);
  if (start == -1) {
    return 0
  };
  end = (function (data, start, end, k) {
    let mid, val;
    while (start < end) {
      mid = start + Math.floor((end - start) / 2);
      val = data[mid] - 0.5;
      if (val < k) {
        start = mid + 1;
      } else if (val > k) {
        end = mid - 1;
      } else {
        if (end == mid || data[mid + 1] != k) {
          return mid;
        } else {
          start = mid + 1;
        }
      }
    }
    return end;
  })(data, start, end, k);
  return end - start + 1;
}