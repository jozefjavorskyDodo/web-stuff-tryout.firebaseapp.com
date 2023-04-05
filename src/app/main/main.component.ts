

import { Component } from "@angular/core";


@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})


export class MainComponent {

  subs_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      let sub_00: any = document.querySelectorAll(
        <string>(
          String(".sub00")
        ));
      let sub_01: any = document.querySelectorAll(
        <string>(
          String(".sub01")
        ));
      let sub_02: any = document.querySelectorAll(
        <string>(
          String(".sub02")
        ));
      let sub_10: any = document.querySelectorAll(
        <string>(
          String(".sub10")
        ));
      let sub_11: any = document.querySelectorAll(
        <string>(
          String(".sub11")
        ));
      let sub_12: any = document.querySelectorAll(
        <string>(
          String(".sub12")
        ));
      let sub_20: any = document.querySelectorAll(
        <string>(
          String(".sub20")
        ));
      let sub_21: any = document.querySelectorAll(
        <string>(
          String(".sub21")
        ));
      let sub_22: any = document.querySelectorAll(
        <string>(
          String(".sub22")
        ));
      [...sub_00, ...sub_11, ...sub_22].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 122, 122)")
        );
      });
      [...sub_01, ...sub_12, ...sub_20].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(122, 244, 122)")
        );
      });
      [...sub_02, ...sub_10, ...sub_21].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(122, 122, 244)")
        );
      });
    } catch (err_2) {
      if (err_2) {
        console.clear();
        console.log(err_2);
      };
    };
  };


  rows_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      let y_0: any = document.querySelectorAll(
        <string>(
          String(".y0")
        ));
      let y_1: any = document.querySelectorAll(
        <string>(
          String(".y1")
        ));
      let y_2: any = document.querySelectorAll(
        <string>(
          String(".y2")
        ));
      let y_3: any = document.querySelectorAll(
        <string>(
          String(".y3")
        ));
      let y_4: any = document.querySelectorAll(
        <string>(
          String(".y4")
        ));
      let y_5: any = document.querySelectorAll(
        <string>(
          String(".y5")
        ));
      let y_6: any = document.querySelectorAll(
        <string>(
          String(".y6")
        ));
      let y_7: any = document.querySelectorAll(
        <string>(
          String(".y7")
        ));
      let y_8: any = document.querySelectorAll(
        <string>(
          String(".y8")
        ));
      [...y_0, ...y_3, ...y_6].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 122, 122)")
        );
      });
      [...y_1, ...y_4, ...y_7].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(122, 244, 122)")
        );
      });
      [...y_2, ...y_5, ...y_8].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(122, 122, 244)")
        );
      });
    } catch (err_3) {
      if (err_3) {
        console.clear();
        console.log(err_3);
      };
    };
  };


  cols_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      let x_0: any = document.querySelectorAll(
        <string>(
          String(".x0")
        ));
      let x_1: any = document.querySelectorAll(
        <string>(
          String(".x1")
        ));
      let x_2: any = document.querySelectorAll(
        <string>(
          String(".x2")
        ));
      let x_3: any = document.querySelectorAll(
        <string>(
          String(".x3")
        ));
      let x_4: any = document.querySelectorAll(
        <string>(
          String(".x4")
        ));
      let x_5: any = document.querySelectorAll(
        <string>(
          String(".x5")
        ));
      let x_6: any = document.querySelectorAll(
        <string>(
          String(".x6")
        ));
      let x_7: any = document.querySelectorAll(
        <string>(
          String(".x7")
        ));
      let x_8: any = document.querySelectorAll(
        <string>(
          String(".x8")
        ));
      [...x_0, ...x_3, ...x_6].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 122, 122)")
        );
      });
      [...x_1, ...x_4, ...x_7].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(122, 244, 122)")
        );
      });
      [...x_2, ...x_5, ...x_8].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(122, 122, 244)")
        );
      });
    } catch (err_4) {
      if (err_4) {
        console.clear();
        console.log(err_4);
      };
    };
  };


  null_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      let _tds_: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      [..._tds_].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(122, 122, 122)")
        );
      });
    } catch (err_5) {
      if (err_5) {
        console.clear();
        console.log(err_5);
      };
    };
  };


  i_fTxyz_tF_o(): void {
    <string>(
      String("use strict")
    );
    try {
      let ______0r: string[] | any[] | number[] = [];
      let __tds___: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      [...__tds___].forEach((cell) => {
        cell.innerHTML = <string>(
          String('0')
        );
        cell.style.color = <string>(
          String("rgb(0, 0, 0)")
        );
      });
      while (
        <number>(
          Number(______0r.length)
        )
        <
        <number>(
          Number(9)
        )
      ) {
        let pos_prob_new_int_val: number = <number>(
          Number(Math.floor(Math.random()
            * <number>(
              Number(9)
            ))
            + <number>(
              Number(1)
            ))
        );
        if (
          <boolean>(
            Boolean(______0r.includes(
              <number>(
                Number(pos_prob_new_int_val)
              ))))
          ===
          <boolean>(
            Boolean(false)
          )
        ) {
          ______0r.push(
            <number>(
              Number(pos_prob_new_int_val)
            ))
        };
      };
      for (
        let indx_iter: number = <number>(
          Number(0)
        );
        indx_iter <= <number>(
          Number(8)
        );
        indx_iter += <number>(
          Number(1)
        )
      ) {
        __tds___[
          <number>(
            Number(indx_iter)
          )].innerHTML = <string>(
            String(______0r[
              <number>(
                Number(indx_iter)
              )]));
        __tds___[
          <number>(
            Number(indx_iter)
          )
          + <number>(
            Number(12)
          )].innerHTML = <string>(
            String(______0r[
              <number>(
                Number(indx_iter)
              )]));
      };
      __tds___[
        <number>(
          Number(9)
        )].innerHTML = <string>(
          String(______0r[
            <number>(
              Number(6)
            )]));
      __tds___[
        <number>(
          Number(10)
        )].innerHTML = <string>(
          String(______0r[
            <number>(
              Number(7)
            )]));
      __tds___[
        <number>(
          Number(11)
        )].innerHTML = <string>(
          String(______0r[
            <number>(
              Number(8)
            )]));
      __tds___[
        <number>(
          Number(18)
        )].innerHTML = <string>(
          String(______0r[
            <number>(
              Number(3)
            )]));
      __tds___[
        <number>(
          Number(19)
        )].innerHTML = <string>(
          String(______0r[
            <number>(
              Number(4)
            )]));
      __tds___[
        <number>(
          Number(20)
        )].innerHTML = <string>(
          String(______0r[
            <number>(
              Number(5)
            )]));
      __tds___[
        <number>(
          Number(21)
        )].innerHTML = <string>(
          String(______0r[
            <number>(
              Number(6)
            )]));
      __tds___[
        <number>(
          Number(22)
        )].innerHTML = <string>(
          String(______0r[
            <number>(
              Number(7)
            )]));
      __tds___[
        <number>(
          Number(23)
        )].innerHTML = <string>(
          String(______0r[
            <number>(
              Number(8)
            )]));
      __tds___[
        <number>(
          Number(24)
        )].innerHTML = <string>(
          String(______0r[
            <number>(
              Number(0)
            )]));
      __tds___[
        <number>(
          Number(25)
        )].innerHTML = <string>(
          String(______0r[
            <number>(
              Number(1)
            )]));
      __tds___[
        <number>(
          Number(26)
        )].innerHTML = <string>(
          String(______0r[
            <number>(
              Number(2)
            )]));
      for (
        let indx_iter: number = <number>(
          Number(0)
        );
        indx_iter <= <number>(
          Number(26)
        );
        indx_iter += <number>(
          Number(1)
        )
      ) {
        __tds___[
          <number>(
            Number(indx_iter)
          )].style.color = <string>(
            String("rgb(244, 244, 244)")
          );
      };
      {
        {
          for (
            let __10ts_repe: number = <number>(
              Number(1)
            );
            __10ts_repe <= <number>(
              Number(10)
            );
            __10ts_repe += <number>(
              Number(1)
            )
          ) {
            this.fTxyz_tF();
          };
        };
        {
          let _cubicles_ = document.querySelectorAll(
            <string>(
              String("td")
            ));
          let flag_null = <boolean>(
            Boolean(false)
          );
          for (
            let anot_yndx_iter: number = <number>(
              Number(0)
            );
            anot_yndx_iter <= <number>(
              Number(80)
            );
            anot_yndx_iter += <number>(
              Number(1)
            )
          ) {
            if (
              <string>(
                String(_cubicles_[
                  <number>(
                    Number(anot_yndx_iter)
                  )].innerHTML))
              ===
              <string>(
                String('0')
              )
            ) {
              flag_null = <boolean>(
                Boolean(true)
              );
            };
          };
          if (
            <boolean>(
              Boolean(flag_null)
            )
            ===
            <boolean>(
              Boolean(true)
            )
          ) {
            this.i_fTxyz_tF_o();
          } else {
            let _clls_: any = document.querySelectorAll(
              <string>(
                String("td")
              ));
            let pseudo_random_indexes: number[] = [];
            let gen_bttn: any = document.querySelector(
              <string>(
                String("#generate-bttn")
              ));
            let slv_bttn: any = document.querySelector(
              <string>(
                String("#solve-bttn")
              ));
            while (
              <number>(
                Number(pseudo_random_indexes.length)
              )
              <
              <number>(
                Number(40)
              )
            ) {
              let pos_prob_new_int_indx: number = <number>(
                Number(Math.floor(Math.random()
                  * <number>(
                    Number(81)
                  ))));
              if (
                <boolean>(
                  Boolean(pseudo_random_indexes.includes(
                    <number>(
                      Number(pos_prob_new_int_indx)
                    ))))
                ===
                <boolean>(
                  Boolean(false)
                )
              ) {
                pseudo_random_indexes.push(
                  <number>(
                    Number(pos_prob_new_int_indx)
                  ));
              };
            };
            for (
              let anot_anot_indx_iter: number = <number>(
                Number(0)
              );
              anot_anot_indx_iter <= <number>(
                Number(39)
              );
              anot_anot_indx_iter += <number>(
                Number(1)
              )
            ) {
              _clls_[
                <number>(
                  Number(pseudo_random_indexes[
                    <number>(
                      Number(anot_anot_indx_iter)
                    )]))].style.color = <string>(
                      String("rgb(0, 0, 0)")
                    );
            };
            gen_bttn.style.visibility = <string>(
              String("hidden")
            );
            slv_bttn.style.visibility = <string>(
              String("visible")
            );
          };
        };
      };
    } catch (err_6) {
      if (err_6) {
        console.clear();
        console.log(err_6);
      };
    };
  };


  fTxyz_tF(): void {
    <string>(
      String("use strict")
    );
    try {
      let _____tds_: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      for (
        let indx____iter: number = <number>(
          Number(27)
        );
        indx____iter <= <number>(
          Number(80)
        );
        indx____iter += <number>(
          Number(1)
        )
      ) {
        let its___sub: any = document.querySelectorAll(
          <string>(
            String(
              <string>(
                String('.')
              )
              + <string>(
                String(_____tds_[
                  <number>(
                    Number(indx____iter)
                  )].getAttribute(
                    <string>(
                      String("class")
                    ))).split(
                      <string>(
                        String(' ')
                      ))[
                <number>(
                  Number(0)
                )]
              )
            )
          )
        );
        let its_____y: any = document.querySelectorAll(
          <string>(
            String(
              <string>(
                String('.')
              )
              + <string>(
                String(_____tds_[
                  <number>(
                    Number(indx____iter)
                  )].getAttribute(
                    <string>(
                      String("class")
                    ))).split(
                      <string>(
                        String(' ')
                      ))[
                <number>(
                  Number(1)
                )]
              )
            )
          )
        );
        let its_____x: any = document.querySelectorAll(
          <string>(
            String(
              <string>(
                String('.')
              )
              + <string>(
                String(_____tds_[
                  <number>(
                    Number(indx____iter)
                  )].getAttribute(
                    <string>(
                      String("class")
                    ))).split(
                      <string>(
                        String(' ')
                      ))[
                <number>(
                  Number(2)
                )]
              )
            )
          )
        );
        let sub__vals: string[] | any[] | number[] = [];
        let y____vals: string[] | any[] | number[] = [];
        let x____vals: string[] | any[] | number[] = [];
        for (
          let __iter_index: number = <number>(
            Number(0)
          );
          __iter_index <= <number>(
            Number(8)
          );
          __iter_index += <number>(
            Number(1)
          )
        ) {
          sub__vals.push(
            <number>(
              Number(
                <string>(
                  String(its___sub[
                    <number>(
                      Number(__iter_index)
                    )].innerHTML)))));
          y____vals.push(
            <number>(
              Number(<string>(
                String(its_____y[
                  <number>(
                    Number(__iter_index)
                  )].innerHTML)))));
          x____vals.push(
            <number>(
              Number(
                <string>(
                  String(its_____x[
                    <number>(
                      Number(__iter_index)
                    )].innerHTML)))));
        };
        for (
          let ___prob_pos_new_int_v: number = <number>(
            Number(1)
          );
          ___prob_pos_new_int_v <= <number>(
            Number(9)
          );
          ___prob_pos_new_int_v += <number>(
            Number(1)
          )
        ) {
          if (
            (
              <boolean>(
                Boolean(sub__vals.includes(
                  <number>(
                    Number(___prob_pos_new_int_v)
                  ))))
              ===
              <boolean>(
                Boolean(false)
              )
            )
            &&
            (
              <boolean>(
                Boolean(y____vals.includes(
                  <number>(
                    Number(___prob_pos_new_int_v)
                  ))))
              ===
              <boolean>(
                Boolean(false)
              )
            )
            &&
            (
              <boolean>(
                Boolean(x____vals.includes(
                  <number>(
                    Number(___prob_pos_new_int_v)
                  ))))
              ===
              <boolean>(
                Boolean(false)
              )
            )
          ) {
            _____tds_[
              <number>(
                Number(indx____iter)
              )].innerHTML = <string>(
                String(
                  <number>(
                    Number(___prob_pos_new_int_v)
                  )
                )
              );
            _____tds_[
              <number>(
                Number(indx____iter)
              )].style.color = <string>(
                String("rgb(244, 244, 244)")
              );
          };
        };
        if (
          <string>(
            String(_____tds_[
              <number>(
                Number(indx____iter)
              )].innerHTML))
          ===
          <string>(
            String('0')
          )
        ) {
          break;
        };
      };
    } catch (err_7) {
      if (err_7) {
        console.clear();
        console.log(err_7);
      };
    };
  };


  rerender_UI_state(): void {
    <string>(
      String("use strict")
    );
    try {
      let vals_________: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      let g_bttn: any = document.querySelector(
        <string>(
          String("#generate-bttn")
        ));
      let s_bttn: any = document.querySelector(
        <string>(
          String("#solve-bttn")
        ));
      [...vals_________].forEach((v___) => {
        v___.style.color = <string>(
          String("rgb(244, 244, 244)")
        )
      });
      g_bttn.style.visibility = <string>(
        String("visible")
      );
      s_bttn.style.visibility = <string>(
        String("hidden")
      );
    } catch (err_8) {
      if (err_8) {
        console.clear();
        console.log(err_8);
      };
    };
  };


};
